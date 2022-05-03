const User = require('../models/user');
const Movie = require('../models/movie')
const Review = require('../models/review');
const request = require('request');
const movie = require('../models/movie');

module.exports = {
    index,
    show,
}

const rootURL = "https://mcuapi.herokuapp.com/api/v1/"

  function index (req,res) {
    request(rootURL + "movies", function(err,response,body) {
        const movieData =  JSON.parse(body) 
       movieData.data.forEach(function(m) {
        //    Movie.create([
        //        {title: m.data.title,
        //         year: m.release_date}
        //     ])
        res.render('index', {user: req.user, movieData})
       })
    })
}
           


function show(req,res) {
    let movieID = req.params.id
    request(rootURL + "movies", function(err,response,body) {
        const movieData = JSON.parse(body)
       
                Movie.find({id: movieID} , function (err,movie) {
                    Review.find({Movie: movie[0]._id}, function (err,review) {
                        let newReview = (review[0].text)
                        res.render('movie/show', {movieData, movieID})
                         })
                    })
                })
            }
           







