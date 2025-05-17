process.env.DEBUG = 'http';
const debug = require('debug')('http')
const http = require('http')
const name = 'My App';

// fake app

debug('booting %o', name);

http.createServer(function(req, res) {
  debug(req.method + ' ' + req.url);
  res.end('hello\n');
}).listen(3000, function() {
  debug('listening');
});
