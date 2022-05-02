const mongoose = require('mongoose');
const User = require('../models/user')

const movieSchema = new.mongoose.Schema({
    title: String,
    year: Number,
    rating: [userSchema.rating],
    reviews: [userSchema.reviews]
})

module.exports = mongoose.model('Movie', movieSchema);