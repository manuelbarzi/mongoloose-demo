const { Schema, ObjectId } = require('mongoloose')

module.exports = new Schema({
    subject: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    status: {
        type: Number,
        default: 0
    },
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
})