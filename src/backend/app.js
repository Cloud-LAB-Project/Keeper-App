const express = require('express');

const app = express();

app.get('/hello', function (req, res) {
    res.send('Welcome to the Server');
});

app.listen(8000, function () {
    console.log('Server is up and running on port 8000!');
});
