const User = require("../models/user");
const Movie = require("../models/movie");
const Review = require("../models/review");
const request = require("request");
const movie = require("../models/movie");
const user = require("../models/user");

module.exports = {
  index,
  show,
  find,
};

function index(req, res) {
  let user = req.user;
  Movie.find({}, function (err, movie) {
    res.render("index", { m: movie, user });
  });
}

function show(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    Review.find({ Movie: movie._id })
      .populate("User")
      .exec(function (err, review) {
        res.render("movie/show", { m: movie, review, user: req.user });
      });
  });
}

function find(req, res) {
  const regex = new RegExp(req.query.title, "i");
  Movie.find({ title: { $regex: regex } }, function (err, movie) {
    res.render("movie/search", { movie });
  });
}
