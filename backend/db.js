import mysql from "mysql2";
import "dotenv/config";

const pool = mysql.createPool({ // autenticação no Banco de Dados
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port,
    waitForConnections: process.env.waitForConnections,
    connectionLimit: process.env.connectionLimit,
    queueLimit: process.env.queueLimit
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



