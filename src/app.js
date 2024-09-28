const express = require('express')
const connectDB = require('./config/database');
const Users = require('./models/user');
const app = express();
//express.json is used for middelware to read the data as json
app.use(express.json());

app.post('/signup' , async (req,res) => {
    let data = req.body;
    const userData  = new Users(data); 
    try{
      let saveUsersData =  await userData.save();
      res.send(saveUsersData)

    }catch(error){
        res.status(401).send("something went wrong");
    }
})

app.get('/feed' , async(req,res) => {
   try{
      let users = await Users.find({})
      res.send(users)
   }catch(err){
    send.status(401).send("something went wrong")
   }
})

app.delete('/deleteuser' , async (req,res) => {
   const userId = req.body.id;
   try{
    let deleteuser = await Users.findByIdAndDelete({_id: userId})
    console.log(deleteuser)
    res.send("user deleted sucessfull")
   }catch(err){
    res.status(401).send("something went wrong")
   }
  
})

app.patch('/updateuser' ,async (req,res) => {
   const userId= req.body.id;
   const newData = req.body;
   try{
     const updateUserData = await Users.findByIdAndUpdate({_id:userId} , newData , {returnDocument:'after'});
     res.send(updateUserData)
   }catch(error){
     res.status(401).send("something went wrong")
   }
})

app.get('/user' , async(req,res) => {
   const userEmailId = req.body.emailId;
   console.log( userEmailId)
   try{
    const getUser = await Users.find({emailId: userEmailId});
    if(getUser.length === 0){
      res.status(404).send("user not found")
    }else{
      res.send(getUser)
    }
   }catch(error){
      res.send(401).send("something went wrong")
   }
   
})


connectDB().then(() => {
    app.listen(8080,() => {
        console.log("server started")
   })
    console.log("database is connected")
 }).catch((err) => {
    console.log("database connection error")
 })



