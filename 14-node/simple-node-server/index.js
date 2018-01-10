const http = require('http');

http.createServer( (request, response) => {
  console.log( 'Page requested', request );
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World');
}).listen(8000);

console.log('Server is now running at http://localhost:8000');
