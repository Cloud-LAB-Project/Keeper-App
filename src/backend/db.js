const mongoose = require('mongoose');

// console.log('Hello there');
const server = 'mongodb+srv://cloud:keeperapp@cluster0.ok8vs.mongodb.net/keeperDB?retryWrites=true&w=majority'
const db = mongoose.connect(server)
    .then('Connected to database successfully!!!')
    .catch( err => console.log(`Couldn't connect to database: ${err}`));

module.exports.db = db;