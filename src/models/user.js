const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    age:{
        type: String
    },
    emailId:{
        type: String
    },
    password:{
        type: String
    },
    gender:{
        type: String
    }
});

const Users = mongoose.model('Users',usersSchema);
module.exports = Users;