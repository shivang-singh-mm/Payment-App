const mongoose = require ('mongoose')

const modelSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    number:{
        type: Number
    },
    amount:{
        type: Number
    }
})



const User = mongoose.model("UserInfo",modelSchema)

module.exports = User


