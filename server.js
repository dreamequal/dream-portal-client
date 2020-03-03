const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('build'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Enable SSL redirect
app.use(sslRedirect());

app.listen(process.env.PORT || 80);