(async () => {
    try {
        const { mongoloose, models: { User, Task } } = require('workshop-data')

        await mongoloose.connect()

        debugger

        const user = new User({ username: 'pepito', password: '123', date: new Date })

        console.dir(user)

        await user.save()

        debugger

        user.username = 'pepita'

        await user.save()

        debugger

        console.log(user.id)

        const user2 = User.findById(user.id)

        console.dir(user2)

        console.log(user.object === user2.object)

        console.log(user instanceof User)
        console.log(user2 instanceof User)

        debugger

        const task = new Task({ subject: 'hola mundo', body: 'blah blah blah', user: user._id })
    
        await task.save()

        debugger

        task.populate('user')

        debugger
    } catch (error) {
        console.error(error)
    }
})()
