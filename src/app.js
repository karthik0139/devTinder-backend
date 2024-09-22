const express = require('express')
const app = express();
const {isAdminAuth} = require('./middelware/admin');
const {isUserAuth} = require('./middelware/user')

app.use('/admin',isAdminAuth);
app.use('/user' , isUserAuth);

app.delete('/user/deleteuser' , (req,res) => {
    res.send("user deleted sucessfully")
})
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