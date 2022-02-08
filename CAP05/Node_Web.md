# Node e a Web

## Módulo HTTP: servidor e cliente

O módulo HTTP suporta inúmeros objetos, incluido *http.Server*, que é devolvido quando usamos a função *http.createServer*() .

~~~ Javascript
var http = require('http');
var server = http.createServer().listen(8214);

server.on('request', function(req, resp) {
  resp.writeHead(200, {'Content Type': 'text/plain'});
  resp.end('Hello Word');
});

console.log('server lintening on 8214');
~~~

## O que é necessário para criar um servidor web estático?

1. Criar um servidor HTTP que fique de prontidão para receber solicitações dos clientes.
2. Quando uma solicitação chegar, o URL deve ser analizado para determinar a localização do arquivo.
3. Verificar se o arquivo solicitado existe mesmo.
4. Se o arquivo não existir, responder de acordo.
5. Se o arquivo realmente existir, abri-lo para leitura.
6. Preparar um cabeçalho de resposta.
7. Transferir o conteúdo do arquivo para o corpo de resposta.
8. Esperar uma nova solicitação.
