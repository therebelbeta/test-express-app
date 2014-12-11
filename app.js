var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res, next) {
  var info = {
    hello: 'world'
  };
  res.send(info);
})
app.get('/say/:msg/', function(req, res, next) {
  var message = req.params.msg;
  var info = {
    hello: message
  };
  res.send(info);
})
app.listen(3000, function() {
  console.log('listening on 3000');
});