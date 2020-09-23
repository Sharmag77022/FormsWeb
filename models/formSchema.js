const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    title:{type:String,required:true},
    questions:[],
    userId:{type:String,required:true}
})
const newForm = mongoose.model('forms',formSchema);
module.exports = newForm;