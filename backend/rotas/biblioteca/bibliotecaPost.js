import { db } from "../../db.js";

export const postBiblioteca = async (req, res) => {
    try{
        const {nome, nomeAutor, assunto, idLivro, imagem, livro, fk_usuario} = req.body
            db.query("INSERT INTO livros (nome, nomeAutor, assunto, idLivro, imagem, livro, fk_usuario) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [nome, nomeAutor, assunto, idLivro, imagem, livro, fk_usuario]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}