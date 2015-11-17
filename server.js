var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 9090;
var request = require('request');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('listening on port: ', port);
});

app.get('/api/brew', function(req, res) {
  request({
    method: 'JSON',
    url: 'http://api.brewerydb.com/v2/?key=b124abbace7776c29aa83a02dc882e92/brewery/KlSsWY',
    qs: req.query,
  }, function(err, resp, body) {
    if (err) return res.json(err);
    return res.send(body);
  });
});