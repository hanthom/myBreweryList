var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 9090;
var request = require('request');

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('listening on port: ', port);
});


app.get('/api/brewsearch', function(req, res) {
  request({
    method: 'GET',
    url: 'http://api.brewerydb.com/v2/search?key=b124abbace7776c29aa83a02dc882e92&type=brewery',
    //url: 'http://www.giantbomb.com/api/game/3030-4725/?api_key=21d8efb7ae9fad19740194def527d33a897a9a10&format=json',
    qs: req.query,
  }, function(err, resp, body) {
  	console.log(body);
    if (err) return res.status(500).json(err);
    return res.send(body);
  });
});

app.get('/api/brew', function(req, res) {
  request({
    method: 'GET',
    url: 'http://api.brewerydb.com/v2/brewery/' + req.query.id + '?key=b124abbace7776c29aa83a02dc882e92',
  }, function(err, resp, body) {
  	console.log(body);
    if (err) return res.status(500).json(err);
    return res.send(body);
  });
});
