const express = require('express');
const router = express.Router();
const formSchema = require('../models/formSchema');
const mongoose = require('mongoose');

router.get('/',async(req,res)=>{
    const fId = req.query.fId;
    const formData= await formSchema.findById(fId).then(data=>{
        return data;
    }).catch(err=>{
    });
    res.json(formData);
})

module.exports = router;