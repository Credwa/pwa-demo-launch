const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const device = require('express-device');
const axios = require('axios');
const port = process.env.PORT || 3000;
let app = express();

app.use(device.capture());

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
    app.use(express.static(__dirname + '/dist/pwa-ios/'));
    res.sendFile(path.join(__dirname + '/dist/pwa-ios/index.html'));
  } else {
    app.use(express.static(__dirname + '/dist/pwa-mat/'));
    res.sendFile(path.join(__dirname + '/dist/pwa-mat/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
