const express = require('express');
const database = require('./database');
const cors = require('cors');
const server = express();

server.use(cors());
server.use(express.json());

server.get('/', async function(request, response) {

    const dados = await database.select();
    return response.json(dados);
});

server.post('/', async function(request, response) {

    const placa = request.body.placa;
    const nomeCliente = request.body.nomeCliente;
    const duracaoMin = request.body.duracaoMin;

    const result = await database.insert(placa, nomeCliente, duracaoMin);

    return response.status(204).send()
})

server.put('/', async function(request, response) {

    const idVaga = request.body.idVaga;
    const placa = request.body.placa;
    const nomeCliente = request.body.nomeCliente;
    const duracaoMin = request.body.duracaoMin;

    const result = await database.update(idVaga, placa, nomeCliente, duracaoMin);

    return response.status(204).send()
})

server.delete('/:idVaga', async function(request, response) {
    
    const idVaga = request.params.idVaga;
    
    const result = await database.delete(idVaga);

     return response.status(204).send()
})


server.listen(process.env.PORT || 3000);
