import mysql from "mysql2"
import dotenv from "dotenv";

const pool = mysql.createPool({ // autenticação no Banco de Dados
    host: "autorack.proxy.rlwy.net",
    user: "root",
    password: "whHBgILmXRFpeOCxZgTUUiiDuxNFliRw",
    database: "railway",
    port: "15245",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
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



