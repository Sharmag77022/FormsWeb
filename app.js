const express = require('express');
const app = express();
const dbConnection = require('./models/connection');
const userRoute = require('./routing/user');
const formRoute = require('./routing/form');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer();
dbConnection();
mongoose.connect('mongodb://localhost/formApp',{useNewUrlParser: true,useUnifiedTopology: true});
app.use(upload.none());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.use('/form',formRoute);
app.listen(port, () => console.log(`Listening on port ${port}`));