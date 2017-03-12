'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fmLog = require('fm-log');

var _fmLog2 = _interopRequireDefault(_fmLog);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _devConfig = require('./devConfig');

var _devConfig2 = _interopRequireDefault(_devConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Configure our express app here
 */
var app = (0, _express2.default)();

// use body parser middlewares
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _morgan2.default)('tiny'));

// point to our static folder
app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));

if (process.env.NODE_ENV === 'development') {
  (0, _devConfig2.default)(app);
}

// lets define our catch all route for now to send our single page app
app.get('*', function (request, response) {
  response.sendFile(_path2.default.join(__dirname, '../../public/index.html'));
});

// error handler
app.use('*', function (error, request, response, next) {
  response.status(500).json({ message: 'An error occurred: ' + error });
});

// export our configured express app
exports.default = app;