const db = require('../database/db');

module.exports = {
   repos: {
      getRepos: function () {
         let promise = db.Repo.find();
         let promiseData = promise.then((repos) => {
            console.log('repos:', repos);
            return repos;
         });
         return promiseData;
      },
      storeRepos: function (repo) {
         db.Repo.create({
            _id: repo.id,
            name: repo.name,
            openGraphImageUrl: repo.openGraphImageUrl,
            description: repo.description,
            homepageUrl: repo.homepageUrl,
            url: repo.url,
         });
      },
      //todo
      updateReps: function (repo) {},
   },
};
