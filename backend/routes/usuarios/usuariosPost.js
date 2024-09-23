import { db } from "../../db.js";
import bcrypt from "bcryptjs";

export const Postusuarios = async (req, res) => {
  try {
    const { nome, gmail, telefone, senha, idade, genero } = req.body;
    const saltRounds = 10;

    
    bcrypt.hash(senha, saltRounds, async (err, hash) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Erro ao criptografar a senha" });
      }

      console.log('Senha criptografada:', hash);

      
      await db.query(
        'INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero) VALUES (?, ?, ?, ?, ?, ?)',
        [nome, gmail, telefone, hash, idade, genero] 
      );
      
      res.status(200).json({ message: "Usuário inserido com sucesso!" });
    });
  } catch (err) {
    console.log("Erro:", err);
    res.status(500).json({ message: "Erro ao inserir usuário" });
  }
};
