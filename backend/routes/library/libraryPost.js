import { db } from "../../db.js";

export const postlibrary = async (req, res) => {
    try{
        const {name, nameAuthor, subject, idBook, image, book} = req.body
            db.query("INSERT INTO Livros (nome, nomeAutor, assunto, idLivro, imagem, livro) VALUES (?, ?, ?, ?, ?, ?)",
                [name, nameAuthor, subject, idBook, image, book]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}