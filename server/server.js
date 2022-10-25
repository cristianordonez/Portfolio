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

app.use(compression());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

//function that automatically generates refresh tokens from google developer console
// using access token and the google playground
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
            console.log('err in getaccesstoken: ', err);
            reject();
         }
         resolve(token);
      });
   });
   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
         type: 'OAuth2',
         user: process.env.EMAIL_USERNAME,
         accessToken,
         clientId: process.env.OAUTH_CLIENT_ID,
         clientSecret: process.env.OAUTH_CLIENT_SECRET,
         refreshToken: process.env.REFRESH_TOKEN,
      },
   });
   return transporter;
};

//handles post requests to contact form
app.post('/api/contact', (req, res) => {
   let mailOptions = {
      from: req.body.name,
      to: process.env.EMAIL_USERNAME, //receiving address
      subject: req.body.subject,
      text: `${req.body.name} <${req.body.subject}> \n ${req.body.message}`,
   };
   //create function that calls the function made above to generate refresh token
   const sendEmail = async (options) => {
      try {
         let emailTransporter = await createTransporter();
         await emailTransporter.sendMail(mailOptions);
         res.status(201).send('Success');
      } catch (err) {
         console.log('err in send email: ', err);
         res.status(400).send(err);
      }
   };
   sendEmail(mailOptions);
});

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
