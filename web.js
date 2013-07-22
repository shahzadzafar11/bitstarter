var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var infile = "index.html";
  var inbuff = fs.readFileSync(infile); 
  response.send(inbuff);
  //response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("Listening on " + port);
});
