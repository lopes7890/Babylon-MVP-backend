import { db } from "../db.js";

export const rotaUsuario = async () => {
//  const sql = "INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero, idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)";
//  const values = ['João', 'joao@example.com', '300974673', 'sebholpy', 16, 'masculino', 0];
  try{
/*    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados: ', err);
        return;
      }
      console.log('Dados inseridos com sucesso! ID do novo registro: ', result.insertId);
    });*/
    const [resultTableUsers] = await db.query('SELECT * FROM usuario');
    console.log('Resultados da consulta:', resultTableUsers);
    return resultTableUsers;
  } catch (err){ 
      console.error('Erro na consulta:', err.stack);
      return;
  }
  
};