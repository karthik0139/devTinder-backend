const express = require('express');
const app = express();

app.get('/user' , (req,res) => {
    res.send({firstName:'karthik' , lastName:'Amarneni'})
})

app.post('/user', (req,res) => {
     res.send("userData has been posted sucessfully")
})

app.delete('/user', (req,res) => {
    res.send("userData is deleted sucessfully")
})


app.listen(8080,() => {
     console.log("server started")
})