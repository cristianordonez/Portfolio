const token = require('../config/config').GITHUB_API_TOKEN;
const axios = require('axios');
//url for getting ALL repos
const allReposUrl = 'https://api.github.com/user/repos';

//url for getting public repos
const url = 'https://api.github.com/users/cristianordonez/repos';

const getReposFromGithub = () => {
   let promise = axios.get(url, {
      headers: {
         Authorization: `token ${token}`,
      },
   });
   let promiseData = promise.then((response) => {
      return response;
   });
   return promiseData;
};

module.exports = {
   getReposFromGithub,
};
