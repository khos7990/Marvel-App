const Review = require('../models/review');
const Movie = require('../models/movie');
const user = require('../models/user');


module.exports = {
    new: newReview,
    create,
    edit,
    update,
    delete: deleteOne
}


function newReview (req,res) {
    res.render('review/new', {movieid: req.params.id})
}

function create (req,res) {
    Review.create(req.body, function (err,review) {
        review.Movie = req.params.id
        if (req.user) {
        review.User = req.user
        }
        console.log(review)
        review.save(function(err) {
            res.redirect('/movies/' + req.params.id)

        })
    })
}

function edit (req,res) {
    Review.find({_id: req.params.id}, function(err,review) {
        res.render('review/edit', {review, rev: req.params.id})
    })
}

function update (req,res) {
    // Review.findOneAndReplace(req.params.id, {
    //     text: req.body.text
    // })
    console.log('hitting')
    console.log(req.body.text)
    res.redirect('/movies/' + req.params.id)
}

function deleteOne (req,res) {
    console.log('hitting');
    Review.findOneAndDelete({_id: req.params.id}, function (err,review) {
        res.redirect('/movies')
    })
}