const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/user");

const movieSchema = new Schema({
  title: String,
  release_date: String,
  overview: String,
  cover_url: String,
  trailer_url: String,
});

module.exports = mongoose.model("Movie", movieSchema);
