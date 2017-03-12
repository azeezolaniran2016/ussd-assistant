'use strict';

var _fmLog = require('fm-log');

var _fmLog2 = _interopRequireDefault(_fmLog);

var _server = require('./config/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 9001;
_server2.default.listen(port, function (error) {
  if (error) {
    _fmLog2.default.error('Error occured while starting server: ' + error);
    process.exit(-1);
  }
  _fmLog2.default.info('Server started on port ' + port);
});