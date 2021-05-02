const mongosse  = require('mongoose')


mongosse.connect(process.env.MONGODB_URL , {
    useNewUrlParser : true,
    useCreateIndex : true
})


