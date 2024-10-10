import { db } from "../../db.js";

export const postlibrary = async (req, res) => {
    try{
        const {name, nameAuthor, subject, publisher, yearPublished, idBook, image} = req.body
            db.query("INSERT INTO Livros (id_livro, nome_livro, capa_livro, id_usuario) VALUES (?, ?, ?, ?, ?, ?, ?",
                [name, nameAuthor, subject, publisher, yearPublished, idBook, image]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}