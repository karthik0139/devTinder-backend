const validator = require('validator');
const isValidation = (request) => {
    const {firstName , lastName , emailId , password} = request.body;

    if(!firstName || !lastName){
        throw new Error("FirstName and lastname must be required")
    }else if(!validator.isEmail(emailId)){
        throw new Error("Invalid Email id")
    }
}

module.exports = isValidation