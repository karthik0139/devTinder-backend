const express = require('express')
const app = express();

app.get('/user',
   [ (req,res, next) => {
        console.log("first server is called");
        // res.send("first server return a data")
        next();
    },
    (req,res,next) => {
        console.log("second server is called")
         res.send("second server return a data")
        next()
    }],
    (req,res,next) => {
        console.log("third server is called")
        // res.send("third server returns data")
        // next()
    }
)


app.listen(8080,() => {
     console.log("server started")
})