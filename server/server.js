require('dotenv').config();
const path = require('path');
const express = require('express');
var cors = require('cors');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const db = require('./database/db');
const controllers = require('./controllers/controllers');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const compression = require('compression');
const { OAuth2Client } = require('google-auth-library');

//MIDDLEWARE
app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//!added api to routes for https connection
//ROUTES
//handles initial graphQL query for all data
app.get('/api/repos', (req, res) => {
   controllers.repos.getRepos(req, res);
});

app.post('/api/repos', (req, res) => {
   controllers.repos.storeRepos(req, res);
});

//handles automatic webhook integration
app.post('/', (req, res) => {
   controllers.repos.updateRepos(req, res);
});

const createTransporter = async () => {
   const oauth2Client = new OAuth2(
      process.env.OAUTH_CLIENT_ID,
      process.env.OAUTH_CLIENT_SECRET,
      'https://developers.google.com/oauthplayground'
   );

   oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN,
   });

   const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
         if (err) {
            reject();
         }
         resolve(token);
      });
   });
   //set up nodemailer transport using OAuth2 to automatically send emails
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         type: 'OAuth2',
         user: process.env.EMAIL_USERNAME,
         accessToken,
         // pass: process.env.EMAIL_PASSWORD,
         clientId: process.env.OAUTH_CLIENT_ID,
         clientSecret: process.env.OAUTH_CLIENT_SECRET,
         refreshToken: process.env.REFRESH_TOKEN,
      },
   });
   return transporter;
};

//handles post requests to contact form
app.post('/api/contact', (req, res) => {
   console.log('here in contact form post');
   let mailOptions = {
      from: req.body.name,
      to: process.env.EMAIL_USERNAME, //receiving address
      subject: req.body.subject,
      text: `${req.body.name} <${req.body.subject}> \n ${req.body.message}`,
   };
   const sendEmail = async (options) => {
      try {
         let emailTransporter = await createTransporter();
         await emailTransporter.sendMail(mailOptions);
         res.status(201).send('Success');
      } catch (err) {
         console.log('err:', err);
         res.status(400).send(err);
      }
   };
   // let transporter = createTransporter();
   sendEmail(mailOptions);
   // transporter.sendMail(mailOptions, (err, data) => {
   //    if (err) {
   //       console.log(err);
   //       res.status(400).send('Unable to send message.');
   //    } else {
   //       res.status(201).send('Email has been sent');
   //    }
   // });
});

//END ROUTES

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
