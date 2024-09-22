const isUserAuth = (req,res,next) => {
    const token = "User";
    const isUser = token === "User";
    if(!isUser){
       res.status(401).send("unauthorized")
    }else{
        // res.send('user data is sended')
        next()
    }
}

module.exports = {isUserAuth}