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

const getSingleRepoQuery = (repoName) => {
   return {
      query: `{
  repositoryOwner (login: "cristianordonez") {
    repositories {
      totalCount
    }
    repository(name: "${repoName}") {
      id
      openGraphImageUrl
    }
  }
}`,
   };
};

//gets all repos
const getReposFromGithub = () => {
   let promise = axios.post(graphQLUrl, graphQLQuery, {
      headers: {
         Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
      },
   });
   let promiseData = promise.then((response) => {
      return response.data.data.search.nodes;
   });
   return promiseData;
};

// gets specific repo image of repo triggered by webhook
const getSingleRepo = (repoName) => {
   let query = getSingleRepoQuery(repoName);
   let promise = axios.post(graphQLUrl, query, {
      headers: {
         Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
      },
   });
   let promiseData = promise.then((response) => {
      return response.data.data.repositoryOwner.repository;
   });
   return promiseData;
};

module.exports = {
   getReposFromGithub,
   getSingleRepo,
};
