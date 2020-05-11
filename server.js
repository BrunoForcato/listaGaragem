const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Lista Garagems');
})

server.post('/', function(request, response) {
    response.send('Hello World!');
})

server.put('/', function(request, response) {
    response.send('Hello World!');
})

server.delete('/', function(request, response) {
    response.send('Hello World!');
})


server.listen(process.env.PORT || 3000);