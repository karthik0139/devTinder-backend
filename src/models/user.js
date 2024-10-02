const mongoose = require('mongoose');
const validator = require('validator');

const usersSchema = new mongoose.Schema(
 {
    firstName:{
        type: String,
        required: true,
        minLength:3,
        maxLength:50
    },
    lastName:{
        type: String
    },
    age:{
        type: Number,
        min:18
    },
    photoUrl:{
       type: String,
       default:'https://ibb.co/5B5PY66'
    },
    emailId:{
        type: String,
        required: true,
        unique: true,
        validate(value){
           if(!validator.isEmail(value)){
             
             throw new Error("Email is not a valid")
           }
        }
    },
    password:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        validate(value){
          if(!['male','female','others'].includes(value)){
             throw new Error("Gender is not valid")
          }
        }
    },
    about:{
        type:String,
        default:'This is about defalut',
    },
    skills:{
        type:[String]
    }
} , {timestamps: true});

const Users = mongoose.model('Users',usersSchema);
module.exports = Users;