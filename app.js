const express = require('express');
const app = express();
const dbConnection = require('./models/connection');
const userRoute = require('./routing/user');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
dbConnection();
mongoose.connect('mongodb://localhost/formApp',{useNewUrlParser: true,useUnifiedTopology: true});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'aDemoSecret',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure:false,
        maxAge:1000*60*60
    }
  }))
app.use('/user',userRoute);

app.get('/',(req,res)=>{
    res.send('hello');
})
app.get('/hello',(req,res)=>{
    res.send('hello sanjeev');
})

app.listen(port, () => console.log(`Listening on port ${port}`));