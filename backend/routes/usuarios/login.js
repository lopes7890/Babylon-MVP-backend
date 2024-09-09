import { db } from "../../db.js";
import bcrypt from "bcrypt";  
import jwt from "jsonwebtoken";

export const loginUsers = async (req, res) => {
    try {
        console.log("Entrou na função login");

        const { gmail, senha } = req.body;

        if (!gmail || !senha) {
            console.log("Dados de login inválidos");
            return res.status(400).json("Por favor, forneça gmail e senha.");
        }

        db.query("SELECT * FROM usuario WHERE gmail = ?", [gmail], (err, results) => {
            if (err) {
                console.log("Erro na consulta ao banco de dados", err);
                return res.status(500).send("Erro no servidor");
            }

            if (results.length === 0) {
                console.log("Usuário não encontrado");
                return res.status(401).json("Usuário não encontrado");
            }

            const user = results[0];  

            bcrypt.compare(senha, user.senha, (err, isMatch) => {
                if (err) {
                    console.log("Erro ao comparar senhas", err);
                    return res.status(500).send("Erro ao comparar as senhas");
                }

                if (!isMatch) {
                    console.log("Senha incorreta");
                    return res.status(401).json("Senha incorreta");
                }

                const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1h' });

                console.log("Usuário autenticado com sucesso");
                res.status(200).json({ token });
            });
        });
    } catch (err) {
        console.error("Erro na execução do código:", err);
        res.status(500).json({ message: "Erro no servidor" });
    }
};
