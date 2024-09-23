import { db } from "../../db.js";


export const lendoLivro = async () => {
    try{
        const [resultTableBiblioteca] = await db.query('SELECT * FROM Livros'); 
        console.log('Resultados obtidos: ', resultTableBiblioteca);
        return resultTableBiblioteca;   
    } catch (err){
        console.error('Erro na consulta:', err.stack);
        return;
    }
};