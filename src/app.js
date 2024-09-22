const express = require('express')
const app = express();

app.use('/admin', (req,res,next)=> {
    const token = 'abc';
    const isAuth = token === 'abc';
    console.log("admin route is been called")
    if(isAuth){
        next();
    }
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