const isUserAuth = (req,res,next) => {
    const token = "Users";
    const isUser = token === "User";
    if(!isUser){
       res.status('401').send("unauthorized")
    }else{
        res.send('user data is sended')
    }
}

module.exports = {isUserAuth}