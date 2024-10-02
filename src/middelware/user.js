const jwt = require('jsonwebtoken');
const User = require('../models/user');
const isUserAuth = async (req,res,next) => {
    try{
    const {token} = req.cookies;
    if(!token){
        throw new Error("Invalid Token")
    }
    const decodeToken = await jwt.verify(token , "karthikamarneni");
    const {_id} = decodeToken;
    const findUser = await User.findById(_id);
    if(!findUser){
        throw new Error("User not Found")
    }
    req.user = findUser;
    next();

    }catch(err){
        res.status(401).send(err.message)
    }
    
}

module.exports = {isUserAuth}