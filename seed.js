require('./config/database');
const Movie = require('./models/movie');
const request = require('request');
const rootURL = "https://mcuapi.herokuapp.com/api/v1/"

  function populate () {
     Movie.deleteMany({}, function(){
        request(rootURL + "movies", function(err,response,body) {
            const movieData =  JSON.parse(body) 
            console.log(movieData)
            movieData.data.forEach(function(mov) {
                Movie.create(mov, function (err,movie) {
                    console.log(movie)
                    movie.save()
                })
            } )
        })
     })

}


populate()