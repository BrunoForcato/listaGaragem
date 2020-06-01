
//yarn add pg

const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'ojsqudnxqwrwuj',
    password: 'f99b1adff3d3b1fe1347c63b218e200f83888e983b6b67ff6fe3673c95bce236',
    host: 'ec2-52-207-25-133.compute-1.amazonaws.com',
    database: 'db4ed5er2g68cj',
    port: 5432,
    ssl: { rejectUnauthorized: false }
});

// const sqlCreate = `
//     CREATE TABLE IF NOT EXISTS listaGaragem
//     (
//         idVaga serial primary key,
//         placa varchar(8) not null,
//         nomeCliente varchar(50) not null,
//         DuracaoMin int not null default 30
//     )
// `;

// pool.query( sqlCreate , function(error, result) {
//     if(error)
//     throw error

//     console.log("Tabela criada com sucesso")
// });

module.exports = {

    async  insert(placa, nomeCliente, duracaoMin){

        const sql = `INSERT INTO listaGaragem (placa, nomeCliente, duracaoMin)
                VALUES ($1, $2, $3)`;
        
        const result = await pool.query(sql, [placa, nomeCliente, duracaoMin]);

        return result.rowCount;
    },

    async  select(){
        const sql = `SELECT * FROM listaGaragem`;
        
        const result = await pool.query(sql);

        return result.rows;
    },

      async  delete(idVaga){

        const sql = `DELETE FROM listaGaragem WHERE idVaga = $1`;
        
        const result = await pool.query(sql, [idVaga]);

        return result.rowCount;
    },

    async  update(idVaga, placa, nomeCliente, duracaoMin){

        const sql = `UPDATE listaGaragem
        SET placa = $2, nomeCliente = $3, duracaoMin = $4
        WHERE idVaga = $1`;
        
        console.log(placa)

        const result = await pool.query(sql, [idVaga, placa, nomeCliente, duracaoMin]);

        return result.rowCount;
    },

    
}
