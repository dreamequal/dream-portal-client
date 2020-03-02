const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const app = express();

// enable ssl redirect
app.use(sslRedirect());

app.use(express.static('build'));

app.listen(process.env.PORT || 80);