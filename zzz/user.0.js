// const validate = require('./validate')


class User {
    constructor(object) {
        if (!object.username) throw Error('no username')
        if (!object.password) throw Error('no password')
        // ...
    }
}

new User({ username: 'pepito', password: '123'})