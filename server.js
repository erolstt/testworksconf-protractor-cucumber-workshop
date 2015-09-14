var express = require('express');
var app = express();

app.post('/checkout', function (req, res) {
  res.sendStatus(200);
});

var server = app.listen(3000, function () {
  console.log('Webshop app listening on port %s', server.address().port);
});
