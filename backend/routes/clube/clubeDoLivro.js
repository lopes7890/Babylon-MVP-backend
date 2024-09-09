import { db } from "../../db.js";

export const getClube = async () => {
    try{
        const [resultTableClube] = await db.query('SELECT * FROM ClubeLivro');
        console.log('Resultados da consulta:', resultTableClube);
        return resultTableClube;
    } catch (err){ 
          console.error('Erro na consulta:', err.stack);
          return;
    }
};