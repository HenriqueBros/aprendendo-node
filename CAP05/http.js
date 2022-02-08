var http = require('http');
var server = http.createServer().listen(8214);

server.on('req', function(req, resp) {
  resp.writeHead(200, {'Content Type': 'text/plain'});
  resp.end('Hello Word');
});

console.log('server lintening on 8214');