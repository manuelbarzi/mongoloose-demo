// const validate = require('./validate')

class Task {
    constructor(object) {
        if (!object.title) throw Error('no title')
        if (!object.body) throw Error('no body')
        // ...
    }
}

new Task({ title: 'hola', body: 'mundo'})