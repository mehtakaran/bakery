'use strict'

const express       = require('express'),
      app           = express(),
      server        = require('http').createServer(app),
      bodyParser    = require('body-parser'),
      router        = express.Router(),
      routes        = require('./routes'),
      accesslog     = require('access-log'),
      compression   = require('compression'),
      helmet        = require('helmet'),
      morgan        = require('morgan'),
      path          = require('path'),
      fs            = require('fs'),
      rfs           = require('rotating-file-stream'),
      cluster       = require('cluster'),
      numCPUs       = require('os').cpus().length,
      config        = require('config'),
      apiRoutes     = require('./api/routes');

app.use(express.static('public'));

// gzip compression
app.use(compression());
// securing the app
app.use(helmet());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Allow cross origin calls
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var logDirectory = path.join(__dirname, 'log');
// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
});
// setup the logger
app.use(morgan('combined', {stream: accessLogStream}));

//Register routes for public html files
apiRoutes(app);
routes(app);

app.listen(config.get("port"));
