import { db } from "../../db.js";

export const Postusuarios = async (req) => {
     try{
        const q = 'INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [
            req.body.nome, 
            req.body.gmail, 
            req.body.telefone, 
            req.body.senha, 
            req.body.idade,
            req.body.genero]

        await db.query(q, [values]);
        return;
    } catch (err){
        console.log("erro");
        return;
    } 
/*      try{
         const {nome, gmail, telefone, senha, idade, genero, idUsuario} = req.body;
        await db.query('INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero) VALUES (?, ?, ?, ?, ?, ?)',
        [nome, gmail, telefone, senha, idade, genero]
        );
        return;
    } catch (err){
        console.log("erro");
        return;
    }   */
}