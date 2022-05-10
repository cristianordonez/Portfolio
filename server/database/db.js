const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/repos';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//schemas
const Schema = mongoose.Schema;

const RepoSchema = new Schema({
   _id: Number,
   name: {
      type: String,
      required: true,
      unique: 'Repo is already stored',
   },
   description: String,
   url: String,
});

const Repo = mongoose.model('Repo', RepoSchema);

module.exports = {
   Repo,
};
