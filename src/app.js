const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require('./models/user');

app.post('/signup',async (req,res)=>{
    const user = new User({
        firstName:"Shruti",
        lastName:"Pokale",
        emailId:"Shru@123.com",
        password:"Shruti123",
        age:23,
        gender:"female"
    });

    try{
        await user.save();
        res.send("user added successfully");
    }catch(err){
        res.status(400).send("error in saving the user"+err.message);
    }
})

connectDB()
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("server listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
