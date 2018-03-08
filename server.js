const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const device = require('express-device');
const port = process.env.PORT || 3000;
let app = express();

app.use(device.capture());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res) {
  var ua = req.headers['user-agent'],
    $ = {};

  if (/mobile/i.test(ua)) $.Mobile = true;

  if (/like Mac OS X/.test(ua)) {
    $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/
      .exec(ua)[2]
      .replace(/_/g, '.');
    $.iPhone = /iPhone/.test(ua);
    $.iPad = /iPad/.test(ua);
    app.use(express.static(__dirname + '/dist/pwa-ios'));
    res.sendFile(path.join(__dirname + '/dist/pwa-ios/index.html'));
  } else {
    app.use(express.static(__dirname + '/dist/pwa-mat'));
    res.sendFile(path.join(__dirname + '/dist/pwa-mat/index.html'));
  }
});

app.get('/test', function(req, res) {
  console.log(req.device.type.toUpperCase());
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
