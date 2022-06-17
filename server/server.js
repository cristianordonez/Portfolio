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
const compression = require('compression');

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
   console.log('req:', req);
   controllers.repos.getRepos(req, res);
});

app.post('/api/repos', (req, res) => {
   controllers.repos.storeRepos(req, res);
});

//handles automatic webhook integration
app.post('/', (req, res) => {
   console.log('here in update');
   controllers.repos.updateRepos(req, res);
});

//set up nodemailer transport using OAuth2 to automatically send emails
let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      type: 'OAuth2',
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
   },
});

//handles post requests to contact form
app.post('/api/contact', (req, res) => {
   let mailOptions = {
      from: req.body.name,
      to: process.env.EMAIL_USERNAME, //receiving address
      subject: req.body.subject,
      text: `${req.body.name} <${req.body.subject}> \n ${req.body.message}`,
   };
   transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
         res.status(400).send('Unable to send message.');
      } else {
         res.status(201).send('Email has been sent');
      }
   });
});

//END ROUTES

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
