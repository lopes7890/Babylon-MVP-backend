import { db } from "../../db.js";
import bcrypt from "bcryptjs";  
import jwt from "jsonwebtoken";
import "dotenv/config";

export const loginUsuarios = async (req, res) => {

    try{
        console.log("Entrou na função login");

        const { gmail, senha } = req.body;

        if(!gmail || !senha){
            console.log("Dados de login inválidos");
            return res.status(400).json("Por favor, insira gmail e senha.");

        }
        
        // recuperando dados do db
        const [resultados] = await db.query("SELECT * FROM usuario WHERE gmail = ?", [gmail]);
        
        if(resultados.length === 0){
            console.log("Usuário não encontrado");
            return res.status(401).json("Usuário não encontrado");
        }

        const user = resultados[0];

        // comparando senha com sua versão criptografada
        const isMatch = await bcrypt.compare(senha, user.senha);

        if(!isMatch){
            console.log("Senha incorreta");
            return res.status(401).json("Senha incorreta!");
        }

        // gerando token de acesso
        const usuario = user.nome
        const token = jwt.sign({ id: user.idUsuario }, 'secret', { expiresIn: '1h' });
        console.log(token)
        const id = user.idUsuario
        
        console.log(user.idUsuario)
        console.log("Usuário autenticado com sucesso");
        return res.status(200).json({ token, usuario, id })
    
    } catch (err) {
        console.error("Erro na execução do código:", err);
        return res.status(500).json({ messagem: "Erro no servidor" })
    }
}
