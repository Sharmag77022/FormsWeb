const express = require('express');
const router = express.Router();
const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const userAuthentication = require('../Authenticate/userAuthentication');
const userAuthorization = require('../authorization/userAuthorization');
//User Registration
router.post('/register',async(req,res)=>{
   const user = await userSchema.findOne({email:req.body.email}).then(data=>{
       return data;
   })
  if(user){
      res.status(401).json({msg:"user already exist"})
  }else{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const newUser = new userSchema({name:req.body.name,email:req.body.email,password:hash})
            newUser.save((err,user)=>{
                if(err){
                    console.log(err);
                    res.status(401).json({msg:'Registration Failed'});
                }else{
                    console.log(user);
                    res.json({msg:'Registration Successfull'})
                }
            })
        });
    });
    
  }
})
//User Login
router.post('/login',userAuthentication,(req,res)=>{
    req.session.user = req.body.user;
    res.json({msg:'LogIn Successfull'});
})
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.json({msg:"logout success!"});
  });
router.get('/hello',userAuthorization,(req,res)=>{
    console.log(req.userId);
    res.send('hello Sanju')
})  
module.exports= router;