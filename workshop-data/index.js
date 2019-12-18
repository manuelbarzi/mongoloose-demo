const mongoose = require('not-mongoose')
const { model } = mongoose
const { user, task } = require('./schemas')

module.exports = {
    mongoose,
    models: {
        User: model('User', user),
        Task: model('Task', task)
    }
}