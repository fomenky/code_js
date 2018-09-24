var express = require('express');

var app = express();

app.get('/', function(require, response) {
  response.send('Hello AceGod code_js rocks');
})

app.listen(3000, function() {
  console.log('listening on port 3000');
});