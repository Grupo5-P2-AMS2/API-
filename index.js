const express = require('express');
const app = express();

var pepe = ["hola", "adios"];

app.get('/', function (req, res) {
  res.send("hola como estamos");
});
