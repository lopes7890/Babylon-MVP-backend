import { db } from "../../db.js";

export const getClube = async () => {
    try{
        const [resultadoTabelaClube] = await db.query('SELECT * FROM clubelivro');
        console.log('Resultados da consulta:', resultadoTabelaClube);
        return resultadoTabelaClube;
    } catch (err){ 
          console.error('Erro na consulta:', err.stack);
          return;
    }
};