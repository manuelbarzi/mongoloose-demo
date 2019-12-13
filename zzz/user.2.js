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

class Model {
    constructor(schema) {
        this.schema = schema
    }
}

class User extends Model {
    constructor(object) {
        super(schema)
        
        for (const key in this.schema) {
            const rules = schema[key]

            if (rules.required && object[key] == undefined) throw Error(`${key} is required but not present`)

            if (object[key] != undefined)
                if (object[key].constructor !== rules.type) throw Error(`${key} is not of type ${rules.type}`)
        }
    }
}

new User({ username: 'pepito', password: '123', date: new Date })