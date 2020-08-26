const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./models/connection');
const userRoute = require('./routing/user');

const app = express();
const port = process.env.PORT || 5000;
dbConnection();
app.use('/user',userRoute);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}`));