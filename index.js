require("dotenv").config()

const express = require('express')
const database = require('./Config/dbconfig')
const path = require('path')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
database();

app.use('/payment-app',require('./routes/route'))
app.use(express.static(path.join(__dirname,"./note/build")))
app.get("*",function(_,res){
    res.sendFile(
        path.join(__dirname,"./client/build/index.html"),
        function(err){
            res.status(500).send(err);
        }
    )
})

app.listen(process.env.PORT,()=>{
    console.log(`Port on ${process.env.PORT}`)
})
