var express = require('express');
var bodyParser = require('body-parser')
var index = require('./routes/index');
var olympics = require('./routes/olympics');

var app = express();

app.use(express.static('public'));

app.use(bodyParser.json());

app.use('/', index);
app.use('/olympics', olympics);

var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port ' + port);
  console.log('Press Ctrl-C to quit');
});
