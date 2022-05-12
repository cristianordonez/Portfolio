const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/', (req, res) => {
   controllers.repos.getRepos(req, res);
});

router.post('/', (req, res) => {
   controllers.repos.storeRepos(req, res);
});

//todo update repos
router.patch('/', (req, res) => {});
module.exports = router;
