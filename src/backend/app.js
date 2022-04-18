const express = require('express');
const cors = require('cors');
require('./db');

const {user} = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use('/user', user);

app.listen(3001, function () {
    console.log('Server is up and running on port 3001!');
});
