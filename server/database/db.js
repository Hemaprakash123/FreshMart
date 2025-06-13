// const mongoose =require('mongoose')
// var mongourl='mongodb+srv://hemaprakash:hemaprakash123$@cluster0.dp4do.mongodb.net/ecommerce'
// mongoose.connect(mongourl,{useUnifiedTopology:true,useNewUrlParser:true})
// var db=mongoose.connection
// db.on('connected',()=>{
//     console.log("connection successful")
// })
// db.on('error',()=>{
//     console.log("connection failed")
// })
// module.exports=mongoose



const mongoose = require('mongoose');
const mongourl = 'mongodb+srv://hemaprakash:hemaprakash123$@cluster0.dp4do.mongodb.net/ecommerce';

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("MongoDB connection successful");
});

db.on('error', (err) => {
  console.log("MongoDB connection error: ", err);
});

db.on('disconnected', () => {
  console.log("MongoDB connection disconnected");
});

module.exports = mongoose;
