const express = require('express')
const app = express();
const {isAdminAuth} = require('./middelware/admin');
const {isUserAuth} = require('./middelware/user')

app.use('/admin',isAdminAuth);
// app.use('/user' , isUserAuth);

app.delete('/user/deleteuser' ,isUserAuth , (req,res) => {
    // res.send("user deleted sucessfully")
    // throw new Error("error occurend in delete user")

    try{
        res.send('delete user sucess')
    }catch{
         throw new Error("some wrong")
    }
})

app.post('/user/postuser', (req,res,next) => {
    res.send({userData: {firstName:'karthik' , lastName:'Amarneni'}})
})
app.get('/admin/getuser' , (req,res,next) =>{
    console.log("admin getuser is been is called")
   res.send('admin data is seen sent')
})
app.get('/adim/getadminData' , (req,res,next) =>{
    console.log("admin getAdminData is been is called")
    res.send('admin data is seen sent')
 })

 app.use('/', (err,req,res,next) => {
    if(err){
        res.status(500).send("something went wrong")
    }
 })


app.listen(8080,() => {
     console.log("server started")
})