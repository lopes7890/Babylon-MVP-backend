import { db } from "../../db.js";

export const postBiblioteca = async (req, res) => {
    try{
        const {nome, nomeAutor, assunto, editora, anoPubli, idLivro, imagem} = req.body
            db.query("INSERT INTO Livros (id_livro, nome_livro, capa_livro, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?",
                [nome, nomeAutor, assunto, editora, anoPubli, idLivro, imagem]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}