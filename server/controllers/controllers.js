//interacts with server and models
const models = require('../models/models');
const githubAPIHelper = require('../api-helpers/github-api-helpers');

module.exports = {
   repos: {
      //gets repos from db then sends to client
      getRepos: async function (req, res) {
         try {
            let repos = await models.repos.getRepos();
            res.send(repos);
         } catch (err) {
            res.send('Error retrieving repos from database.');
         }
      },
      //fetches repos from github API to save repos to db
      storeRepos: async function (req, res) {
         try {
            let repos = await githubAPIHelper.getReposFromGithub();
            repos.forEach((repo) => {
               models.repos.storeRepos(repo);
            });
            res.send('repos have been stored');
         } catch (err) {
            console.error(err);
         }
      },
      //when webhook is received, sends another graphQL query to get data for changed repo data
      //original request will contain all data except img, so graphQL req will be sent to obtain this value
      updateRepos: async function (req, res) {
         try {
            let repoToUpdate = await githubAPIHelper.getSingleRepo(
               req.body.repository.name
            );
            let requestData = req.body.repository;
            let repo = {
               id: repoToUpdate.id,
               name: requestData.name,
               openGraphImageUrl: repoToUpdate.openGraphImageUrl,
               description: requestData.description,
               homepage: requestData.homepageUrl,
               url: requestData.url,
            };
            let updatedRepo = await models.repos.updateRepo(repo);
         } catch (err) {
            res.status(401).send(err);
         }
      },
   },
};
