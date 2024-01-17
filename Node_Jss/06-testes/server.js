var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    

    response.end('Olá, mundo\n');

}).listen(8080);

console.log('Servidor rodando em 8080')