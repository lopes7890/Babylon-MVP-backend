import { db } from "../../db.js";

export const postBiblioteca = async (req, res, id) => {
    try{
        const { title, authors,	subjects, idLivro, formats } = req.body
            db.query("INSERT INTO livros (title, authors, subjects, idLivro, fk_usuario, formats) VALUES (?, ?, ?, ?, ?, ?)",
                [title, authors, subjects, idLivro, id, formats]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}