const mongoose = require('mongoose')
const { City } = require('./city')


const roomSchema = mongoose.Schema({
    city: { type: mongoose.Schema.Types.ObjectId, ref: City},
    type: String,
    rented: Boolean,
    reserved: Boolean,
    open: Boolean,
    closed: Boolean
})


module.exports.Room = mongoose.model('room', roomSchema)