import { db } from "../../db.js";

export const Postusuarios = async (req) => {
    try{
        const {nome, gmail, telefone, senha, idade, genero, idUsuario} = req.body;
        await db.query('INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero, idUsuario) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [nome, gmail, telefone, senha, idade, genero, idUsuario]
        );
        return;
    } catch (err){
        console.log("erro");
        return;
    }
}