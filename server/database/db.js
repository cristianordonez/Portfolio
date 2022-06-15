const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://cristianordonezrd:${process.env.MONGODB_PASSWORD}@portfolio-app-cluster.rb558f9.mongodb.net/repo?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Schema = mongoose.Schema;

const RepoSchema = new Schema({
   _id: String,
   name: {
      type: String,
      required: true,
      unique: 'Repo is already stored',
   },
   openGraphImageUrl: String,
   description: String,
   homepageUrl: String,
   url: String,
});

const Repo = mongoose.model('Repo', RepoSchema);

module.exports = {
   Repo,
};
