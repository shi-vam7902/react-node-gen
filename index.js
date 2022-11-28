const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(PORT,()=>{
    console.log("Server Started on 3000");
})
mongoose.connect("mongodb://localhost:27017/rylMongoGen",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    keepAlive:true,
    socketTimeoutMS:30000,
},(err)=>{
    if(err)
    {
        console.log("Error Connecting db");
    }
    else
    {
        console.log("DataBase Connection Established");
    }

})
   