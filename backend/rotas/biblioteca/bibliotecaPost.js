import { db } from "../../db.js";

export const postBiblioteca = async (req, res) => {
    try{
        const {nome, nomeAutor, assunto, idLivro, imagem, livro} = req.body
            db.query("INSERT INTO Livros (nome, nomeAutor, assunto, idLivro, imagem, livro) VALUES (?, ?, ?, ?, ?, ?)",
                [nome, nomeAutor, assunto, idLivro, imagem, livro]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}