const http = require('http');

const host = 'localhost';
const port = 3000;

function requestHandler(request, response) {
 console.log(request.url);
 response.end('Hi there again!');
}

http.createServer(requestHandler)
 .listen(port, () => {
   console.log(`Server up on http://${host}:${port}`);
 });
