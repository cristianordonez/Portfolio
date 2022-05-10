const path = require('path');
const express = require('express');
var cors = require('cors');
const port = 1128;
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const repos = require('./routes/routes');
const db = require('./database/db');

//MIDDLEWARE
app.use(cors());
app.use(express.static(path.join(__dirname, '/client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.use('/repos', repos);

app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
