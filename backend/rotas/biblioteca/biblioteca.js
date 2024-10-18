import { db } from "../../db.js";


export const lendoLivro = async () => {
    try{
        const [resultadoTabelaBiblioteca] = await db.query('SELECT * FROM livros'); 
        console.log('Resultados obtidos: ', resultadoTabelaBiblioteca);
        return resultadoTabelaBiblioteca;   
    } catch (err){
        console.error('Erro na consulta:', err.stack);
        return;
    }
};