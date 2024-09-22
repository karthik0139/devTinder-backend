const express = require('express')
const app = express();
const {isAdminAuth} = require('./middelware/admin');

app.use('/admin',isAdminAuth)


app.get('/admin/getuser' , (req,res,next) =>{
    console.log("admin getuser is been is called")
   res.send('admin data is seen sent')
})
app.get('/adim/getadminData' , (req,res,next) =>{
    console.log("admin getAdminData is been is called")
    res.send('admin data is seen sent')
 })


app.listen(8080,() => {
     console.log("server started")
})