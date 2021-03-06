const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../models/userSchema');
const userAuthentication = async (req,res,next)=>{
    const user = await userModel.findOne({'email':req.body.email}).then(data=>{
        return data;
    })
    if(user===null){
        res.status(401).json({msg:'No User Found'})
    }else{
        bcrypt.compare(req.body.password,user.password, function(err, result) {
            if(result){
                req.body.user = user;
                next();
            }else{
                res.status(401).json({msg:'Password Is Incorrect'})
            }
        });
    }
}
module.exports = userAuthentication;