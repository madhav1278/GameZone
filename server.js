const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 1100;

app.use(bodyParser.urlencoded({
  extended: true
}))

const bookrouter = require('./routes/userroutes');
app.use('/user', bookrouter);

app.get("/", (req, res) => {
  res.set({
    "Allow-acces-Allow-Origin": '*'
  })
  return res.send('welcome')
  return res.redirect('reg.html')
}).listen(1100);