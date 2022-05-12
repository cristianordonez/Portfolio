const token = require('../config/config').GITHUB_API_TOKEN;
const axios = require('axios');

//REST api url for getting public repos
const url = 'https://api.github.com/users/cristianordonez/repos';

//GraphQL endpoint url
const graphQLUrl = 'https://api.github.com/graphql';

let graphQLQuery = {
   query: `{
  search(query: "user:cristianordonez is:public", type: REPOSITORY, first: 100) {
    repositoryCount
    nodes {
      ... on Repository {
        id
        name
        openGraphImageUrl
        description
        homepageUrl
        url
      }
    }
  }
}`,
};

const getReposFromGithub = () => {
   let promise = axios.post(graphQLUrl, graphQLQuery, {
      headers: {
         Authorization: `bearer ${token}`,
      },
   });
   let promiseData = promise.then((response) => {
      console.log('response:', response.data.data.search.nodes);
      return response.data.data.search.nodes;
   });
   return promiseData;
};

module.exports = {
   getReposFromGithub,
};
