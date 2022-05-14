const path = require('path');
const express = require('express');
var cors = require('cors');
const port = 1128;
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
// const repos = require('./routes/routes');
const db = require('./database/db');
const controllers = require('./controllers/controllers');

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

//END ROUTES

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
