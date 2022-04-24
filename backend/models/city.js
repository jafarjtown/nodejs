const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    name: String,
})

module.exports.City = mongoose.model('city', citySchema)