const mongosee = require('mongoose');
const connectDB = async () => {
  await mongosee.connect('mongodb+srv://karthikakc01:Akc%400139@ecommerance.oselx.mongodb.net/dev-tinder');
}


module.exports=connectDB