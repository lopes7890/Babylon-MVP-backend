import { db } from "../db.js";

export const clubeDeLeitura = () => {
    db.query('SELECT * FROM clube', (err, results) => { 
        if (err) {
            console.error('Erro na consulta:', err.stack);
            return;
        }
        console.log('Resultados da consulta:', results);
  })};