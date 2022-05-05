const path = require('path');
const express = require('express');
var cors = require('cors');
const port = 1128;
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.static(path.join(__dirname, '/client/dist')));

//ROUTES
app.listen(port, () => {
   console.log(`App listening on port ${port}`);
});
