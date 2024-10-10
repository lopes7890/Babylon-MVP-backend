import { db } from "../../db.js";


export const readingBook = async () => {
    try{
        const [resultTablelibrary] = await db.query('SELECT * FROM Livros'); 
        console.log('Resultados obtidos: ', resultTablelibrary);
        return resultTablelibrary;   
    } catch (err){
        console.error('Erro na consulta:', err.stack);
        return;
    }
};