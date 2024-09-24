const express = require('express')
const connectDB = require('./config/database');
const app = express();

connectDB().then(() => {
    app.listen(8080,() => {
        console.log("server started")
   })
    console.log("database is connected")
 }).catch((err) => {
    console.log("database connection error")
 })



