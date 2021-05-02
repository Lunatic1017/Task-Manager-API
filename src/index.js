const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const UserRoute = require('./routers/user')
const TaskRoute = require('./routers/task')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(UserRoute)
app.use(TaskRoute)


app.listen(port , () => {
    console.log('server is up on port' + port)
})

