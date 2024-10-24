import { db } from "../../db.js";
import bcrypt from "bcryptjs";

export const postUsuario = async (req, res) => {
  try {
    const { nome, gmail, telefone, senha, idade, genero } = req.body;

    const [verifica] = await db.query("SELECT * FROM usuario WHERE gmail = ? OR telefone = ?", [gmail, telefone])

    if (verifica.length === 1){
      return res.status(400).json({message: "Usuário ja existe"})
    }
    
    const saltRounds = 10;

    const hash = await bcrypt.hash(senha, saltRounds);

    console.log('Senha criptografada:', hash);

    await db.query(
      'INSERT INTO usuario (nome, gmail, telefone, senha, idade, genero) VALUES (?, ?, ?, ?, ?, ?)',
      [nome, gmail, telefone, hash, idade, genero]
    );

    return res.status(200).json({ message: "Usuário inserido com sucesso!" });

  } catch (err) {
    console.error("Erro:", err);
    return res.status(500).json({ message: "Erro ao inserir usuário" });
  }
};

