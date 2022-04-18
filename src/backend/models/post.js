const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type: String, unique: true, required: true},
    content: String
});

const model = new mongoose.model('post', schema);

module.exports.post = model;