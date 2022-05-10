//interacts with server and models
const models = require('../models/models');
const githubAPIHelper = require('../api-helpers/github-api-helpers');

module.exports = {
   repos: {
      //gets repos from db then sends to client
      getRepos: async function (req, res) {
         try {
            let repos = await models.repos.getRepos();
            console.log('repos:', repos);
            res.send(repos);
         } catch (err) {
            console.log('err:', err);
            res.send('Error retrieving repos from database.');
         }
      },
      //fetches repos from github API then saves repos to db
      storeRepos: async function (req, res) {
         try {
            let repos = await githubAPIHelper.getReposFromGithub();
            repos.data.forEach((repo) => {
               models.repos.storeRepos(repo);
            });
            res.send('repos have been stored');
         } catch (err) {
            console.error(err);
         }
      },
      //todo fetches repos from API then updates database
      updateRepos: async function (req, res) {
         try {
         } catch (err) {}
      },
   },
};
