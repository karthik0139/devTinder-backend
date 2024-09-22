const isAdminAuth = (req,res,next) =>{
    const token = 'abc';
    const isAdminAuth = token ==='abc';
    if(isAdminAuth){
       next()
    }else{
        res.status(500).send("internal server error")
    }
}

module.exports={
    isAdminAuth,
}