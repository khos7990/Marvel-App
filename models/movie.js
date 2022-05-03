const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user')

const movieSchema = new Schema({
    title: String,
    year: String,
    id: Number
})

module.exports = mongoose.model('Movie', movieSchema);