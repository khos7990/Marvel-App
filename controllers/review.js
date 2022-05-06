const Review = require("../models/review");
const Movie = require("../models/movie");
const user = require("../models/user");

module.exports = {
  new: newReview,
  create,
  edit,
  update,
  delete: deleteOne,
};

function newReview(req, res) {
  res.render("review/new", { movieid: req.params.id });
}

function create(req, res) {
  if (!req.isAuthenticated()) return res.redirect("/auth/google");
  Review.create(req.body, function (err, review) {
    review.Movie = req.params.id;
    if (req.user) {
      review.User = req.user;
    }
    review.save(function (err) {
      res.redirect("/movies/" + req.params.id);
    });
  });
}

function edit(req, res) {
  Review.find({ _id: req.params.id }, function (err, review) {
    let movieId = review[0].Movie;
    console.log(movieId);
    res.render("review/edit", { review, movieId });
  });
}

function update(req, res) {
  Review.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text, rating: req.body.rating },
    function (err, review) {
      let movieId = review.Movie;
      res.redirect("/movies/" + movieId);
    }
  );
}

function deleteOne(req, res) {
  Review.findOneAndDelete({ _id: req.params.id }, function (err, review) {
    let movieId = review.Movie;
    res.redirect("/movies/" + movieId);
  });
}
