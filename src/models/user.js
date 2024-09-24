const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    firstName:{
        type: string
    },
    lastName:{
        type: string
    },
    age:{
        type: string
    },
    emailId:{
        type: string
    },
    password:{
        type: string
    },
    gender:{
        type: string
    }
});

const Users = mongoose.model('Users',usersSchema);
module.exports = Users;