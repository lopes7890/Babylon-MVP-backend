import mysql from "mysql2";
import "dotenv/config";

const pool = mysql.createPool({ // autenticação no Banco de Dados
    host: "junction.proxy.rlwy.net", //process.env.host,
    user: "root", //process.env.user,
    password: "XCLNpWJZYPdpbJlFYhaEPDQzCAuXJPjO", //process.env.password,
    database: "railway", //process.env.database,
    port: "16064", //process.env.port,
    waitForConnections: true, //process.env.waitForConnections,
    connectionLimit: 10, //process.env.connectionLimit,
    queueLimit: 0 //process.env.queueLimit
})

pool.getConnection((err, connection) => { // Verificação de conexão
    if (err) {
      console.error('Erro ao conectar ao MySQL:', err);
      return;
    }
    console.log('Conectado ao MySQL com o ID:', connection.threadId);
    connection.release()
});

export const db = pool.promise()



