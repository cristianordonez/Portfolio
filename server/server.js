const path = require('path');
const express = require('express');
var cors = require('cors');
const port = 1128;
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const config = require('./config/config');
const db = require('./database/db');
const controllers = require('./controllers/controllers');
const nodemailer = require('nodemailer');

//MIDDLEWARE
app.use(cors());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
//handles initial graphQL query for all data
app.get('/repos', (req, res) => {
   controllers.repos.getRepos(req, res);
});

app.post('/repos', (req, res) => {
   controllers.repos.storeRepos(req, res);
});

//handles automatic webhook integration (images not included)
app.post('/', (req, res) => {
   controllers.repos.updateRepos(req, res);
});

//set up nodemailer transport using OAuth2 to automatically send emails
let transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
      type: 'OAuth2',
      user: config.EMAIL_USERNAME,
      pass: config.EMAIL_PASSWORD,
      clientId: config.OAUTH_CLIENT_ID,
      clientSecret: config.OAUTH_CLIENT_SECRET,
      refreshToken: config.REFRESH_TOKEN,
   },
});

//handles post requests to contact form
app.post('/contact', (req, res) => {
   console.log('req.body:', req.body);
   let mailOptions = {
      from: req.body.name,
      to: config.EMAIL_USERNAME, //receiving address
      subject: req.body.subject,
      text: `${req.body.name} <${req.body.subject}> \n ${req.body.message}`,
   };
   transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
         console.log('err:', err);
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
