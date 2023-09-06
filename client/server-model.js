const { default: mongoose } = require('mongoose');
//  const userModel=require("./server.model")

const cors=require("cors")
const express=require("express")
var usersSchema=mongoose.Schema({
    firstName:String,
    lastNmae:String,
    age:Number,
    dob:String,
    phonenumber:String,
    email:String,
    password:String
  });
   
  var userModel= mongoose.model("user",usersSchema)
  module.exports=userModel;
  
  
//creating web app for middle ware
  const app=express();
  app.use(cors());

  // mongo db connection
mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(()=>{
  console.log('DB Connected Successfully.')
})
.catch(()=>{
  console.log('Could not Connect to DB..');
  process.exit();
});
//read data
app.get("/user",function(req, res, next){
  users.find().then(user=>{
    res.send('user details were got');
  })
});

//post data
app.post('/user', function(req, res) {
  let newuser=new userModel({
      // data is passing in dynamic nature
      firstName:req.body.firstName,
      lastNmae:req.body.lastName,
      age:req.body.age,
      dob:req.body.dob,
      email:body.email,
      phonenumber:body.phonenumber
  });
res.send({status:200,message:"User Add Successfully",subjectobj:newuser});
}).patch((err)=>{
  res.status(404).send({message:"data posted unsuccessfully"})
});
app.put("/users/:userId",function(req,res){
var Id=req.parms.userId;
user.findByIdAndUpDate(Id,data)
res.status(200).send("user updated successfully")
}).patch(err=>{
  res.status(404).send({message:"user updated unsucessfuly"})
});

app.delete("/user/:usedId",function(req,res){
  var Id=req.parms.userId;
  user.findByIdAndDelete(Id)
})
app.listen(9000,()=>{
  console.log("server is listening on port 9000")
})