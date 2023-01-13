const mongoose = require("mongoose");

const connectdb = async ()=>{
    mongoose.set('strictQuery', false);
    try{
        await mongoose.connect(process.env.DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("MongoDb connected sucessfully")
    }
    catch (error){
        console.log("MongoDb connection unsucessfully")
        console.log(error)
        process.exit(1);
    }
}

module.exports = connectdb;