const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    email: {type: String, required: true, unique: true},
    fname: String,
    lname: String,
    password: String,
    notes: Array
});

const model = new mongoose.model('user', schema, 'user');

module.exports.user = model;