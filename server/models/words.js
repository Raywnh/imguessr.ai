const mongoose = require('mongoose')
const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        default: ""
    },
    isAdjective: {
        type: Boolean 
    }
})

module.exports = mongoose.model('Word', wordSchema)