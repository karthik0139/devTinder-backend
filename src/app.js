const express = require('express')
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;
const Users = require('./models/user');
const isValidation = require('./utills/validators');
const app = express();
app.use(express.json());
app.use(cookieParser());

app.post('/login' , async(req,res) => {
   try{
      const {emailId , password} = req.body;
      const isEmailIdExits = await Users.findOne({emailId: emailId});
      if(!isEmailIdExits){
        throw new Error("Email not found in database")
      }
      const isPasswordCorrect = await bcrypt.compare(password , isEmailIdExits.password);
      if(!isPasswordCorrect){
        throw new Error("password is incorrect")
      }else{
        const token = await jwt.sign({_id: isEmailIdExits._id} , "karthikamarneni")
        res.cookie("token" , token);
        res.send("Login sucessfull")
      }
      
   }catch(err){
      res.status(401).send(err.message)
   }
})

app.post('/signup' , async (req,res) => {
   const {firstName , lastName , emailId ,password} = req.body
    try{
      //validations checking 
      isValidation(req)
      //password encytion hashing the password
      const passwordHasing = await bcrypt.hash(password , 10);  
      const userData  = new Users({firstName , lastName , emailId , password: passwordHasing}); 
      let saveUsersData =  await userData.save();
      res.send(saveUsersData)

    }catch(error){
        res.status(401).send(error.message);
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
    res.send("user deleted sucessfull")
   }catch(err){
    res.status(401).send("something went wrong")
   }
  
})

app.patch('/updateuser' ,async (req,res) => {
   const userId= req.body.id;
   const newData = req.body;
   try{
     const updateUserData = await Users.findByIdAndUpdate({_id:userId} , newData , {returnDocument:'after' , runValidators: true});
     res.send(updateUserData)
   }catch(error){
     res.status(401).send("something went wrong")
   }
})

app.get('/user' , async(req,res) => {
   const userEmailId = req.body.emailId;
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

app.get('/profile' , async(req, res) => {
    try{
       const {token} = req.cookies;
       if(!token){
          throw new Error("Invalid token")
       }
       const getDecodeToken = await jwt.verify(token , "karthikamarneni");
       const {_id} = getDecodeToken;
       const getUser = await Users.findById(_id);
       if(!getUser){
          throw new Error("User Data Not Found")
       }else{
         res.send(getUser)
       }
    }catch(err){
       res.status(401).send(err.message)
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



