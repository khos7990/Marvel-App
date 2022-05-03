const Review = require('../models/review');
const Movie = require('../models/movie');


module.exports = {
    new: newReview,
    create
}


function newReview (req,res) {
    res.render('movie/review', {movieid: req.params.id})
}

function create (req,res) {
    let movieID = req.params.id
    Movie.find({id: movieID}, function (err,movie) {
        Review.create(req.body, function (err,review) {
            review.Movie = movie[0]._id
            if(req.user) {
            review.User = req.user._id
            }
            review.save(function(err) {
                res.redirect('/movies/' + movieID)

            })
        })
    })

}
