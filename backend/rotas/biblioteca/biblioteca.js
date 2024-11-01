import { db } from "../../db.js";

export const lendoLivro = async (id) => {
    try{
        const [resultadoTabelaBiblioteca] = await db.query("SELECT * FROM livros WHERE fk_usuario = ?", [id]); 
        console.log('Resultados obtidos: ', resultadoTabelaBiblioteca);
        return resultadoTabelaBiblioteca;   
    } catch (err){
        console.error('Erro na consulta:', err.stack);
        return;
    }
};