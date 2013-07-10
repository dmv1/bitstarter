var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var file_contents = fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  response.send(file_contents);
}); 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
