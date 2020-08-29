const express = require('express');
const userAuth = (req,res,next)=>{
    if(req.session.user){
        req.userId = req.session.user._id;
        next();
    }
    else{
        res.status(401).json({msg:'Please Login'});
    }
}
module.exports = userAuth;