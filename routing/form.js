const express = require('express');
const router = express.Router();
const formSchema = require('../models/formSchema');
const responseSchema = require('../models/responseSchema');
router.get('/',async(req,res)=>{
    const fId = req.query.fId;
    const formData= await formSchema.findById(fId).then(data=>{
        return data;
    }).catch(err=>{
    });
    res.json(formData);
})
router.post('/response',async (req,res)=>{
   const data= await responseSchema.find({formId:req.body.form._id ,email:req.body.email}).then(data=>{
    if(data.length>0){
       return data; 
    }else{
        return false;
    }  
   }).catch(err=>{
       console.log(err);
       return false;
   })
  if(!data){
    const newResponse = new responseSchema({formId:req.body.form._id,email:req.body.email,responses:req.body.form.questions});
    newResponse.save((err,response)=>{
        if(err){
            console.log(err);
            res.status(401).json({msg:'Form submission unsuccessful'});
        }else{
            res.json({msg:'Form submission successful'})
        }
    })
  }
})
module.exports = router;