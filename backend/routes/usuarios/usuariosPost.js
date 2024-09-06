import { db } from "../../db.js";

export const Postusuarios = async (req, res) => {
      try{
        const {nome, gmail, telefone, senha, idade, genero} = req.body;
        await db.query('INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero) VALUES (?, ?, ?, ?, ?, ?)',
        [nome, gmail, telefone, senha, idade, genero]
        );
        res.status(200).json({ message: "Usuário inserido com sucesso!" });
    } catch (err){
        console.log("erro");
        res.status(500).json({ message: "Erro ao inserir usuário" });
    } 
}