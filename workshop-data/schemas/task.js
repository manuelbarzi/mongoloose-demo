const { Schema, ObjectId } = require('not-mongoose')

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