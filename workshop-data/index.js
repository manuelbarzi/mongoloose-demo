const mongoloose = require('mongoloose')
const { model } = mongoloose
const { user, task } = require('./schemas')

module.exports = {
    mongoloose,
    models: {
        User: model('User', user),
        Task: model('Task', task)
    }
}