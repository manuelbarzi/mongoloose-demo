// const validate = require('./validate')

class Schema {
    constructor(rules) {
        this.rules = rules
    }
}

const user = new Schema({
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
})

function model(name, schema) {
    if (!(schema instanceof Schema)) throw Error(`${schema} is not an instance of Schema`)
    
    return class {
        constructor(object) {
            for (const key in schema.rules) {
                const rules = schema.rules[key]

                if (rules.required && object[key] == undefined) throw Error(`${key} is required but not present`)

                if (object[key] != undefined)
                    if (object[key].constructor !== rules.type) throw Error(`${key} is not of type ${rules.type}`)
            }
        }
    }
}

const User = model('User', user)

new User({ username: 'pepito', password: '123', date: new Date })