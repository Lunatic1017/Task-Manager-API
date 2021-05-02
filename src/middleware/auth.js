const jwt = require('jsonwebtoken')
const User = require('../models/user')
const user = require('../models/user')

const auth = async (req ,res ,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ' , '')
        const decodedtoken = jwt.verify(token , process.env.JWT_TOKEN)
        const user = await User.findOne({_id : decodedtoken._id , 'tokens.token' : token } )
        
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({error : 'Failed to Authorize the user'})
    }
}

module.exports = auth