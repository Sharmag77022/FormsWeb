const mongoose = require('mongoose');
const connect =()=>{
mongoose.connect('mongodb://localhost/formApp',{useNewUrlParser: true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection to database is Successfull');
});
}

module.exports = connect;