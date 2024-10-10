import { db } from "../../db.js";

export const getClub = async () => {
    try{
        const [resultTableClub] = await db.query('SELECT * FROM ClubeLivro');
        console.log('Resultados da consulta:', resultTableClub);
        return resultTableClub;
    } catch (err){ 
          console.error('Erro na consulta:', err.stack);
          return;
    }
};