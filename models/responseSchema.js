const mongoose = require('mongoose');
const responseSchema = new mongoose.Schema({
    formId:{type:String,required:true},
    email:{type:String,required:true},
    responses:[]
})
const response = mongoose.model('responses',responseSchema);
module.exports = response;