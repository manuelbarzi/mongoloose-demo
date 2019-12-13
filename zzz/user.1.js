// const validate = require('./validate')

const schema = {
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date
    }
}

class User {
    constructor(schema, object) {
        for (const key in schema) {
            const rules = schema[key]

            if (rules.required && object[key] == undefined) throw Error(`${key} is required but not present`)

            if (object[key] != undefined)
                if (object[key].constructor !== rules.type) throw Error(`${key} is not of type ${rules.type}`)
        }
    }
}

new User(schema, { username: 'pepito', password: '123', date: new Date })