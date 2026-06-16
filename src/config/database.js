const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'sistema_tcc.mySQL.dbaas.com.br',
    user: 'sistema_tcc',
    database: 'sistema_tcc',
    password: 'Ana2024#',
    waitForConnections: true,
    connectionLimit: 10
});

module.exports = pool;