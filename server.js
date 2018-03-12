const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const device = require('express-device');
const port = process.env.PORT || 3000;
let app = express();

app.use(device.capture());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app.use((req, res, next) => {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true)
//   // Pass to next layer of middleware
//   next()
// })

app.get('/', function(req, res) {
  // check if request is made from ios or none ios device when serve proper folder
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
    app.use(express.static(__dirname + './'));
    res.sendFile(path.join(__dirname + '/dist/pwa-ios/index.html'));
  } else {
    app.use(express.static(__dirname + '/dist/pwa-mat/'));
    app.use(express.static(__dirname + './'));
    res.sendFile(path.join(__dirname + '/dist/pwa-mat/index.html'));
  }
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = { app };
