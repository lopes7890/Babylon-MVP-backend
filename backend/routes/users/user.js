import { db } from "../../db.js";

export const rotaUsuario = async () => {
  try{
    const [resultTableUsers] = await db.query('SELECT * FROM usuario');
    console.log('Resultados da consulta:', resultTableUsers);
    return resultTableUsers;
  } catch (err){ 
      console.error('Erro na consulta:', err.stack);
      return;
  }
};
