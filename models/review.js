const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Movie = require("./movie");
const User = require("./user");

const reviewSchema = new Schema({
  text: String,
  rating: Number,
  Movie: { type: Schema.Types.ObjectId, ref: Movie },
  User: { type: Schema.Types.ObjectId, ref: User },
});

module.exports = mongoose.model("Review", reviewSchema);
