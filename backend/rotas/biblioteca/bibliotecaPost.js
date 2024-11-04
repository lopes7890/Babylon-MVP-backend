import { db } from "../../db.js";

export const postBiblioteca = async (req, res) => {
    try{
        const { title, authors,	subjects, idLivro, livro, imagem, fk_usuario, translators,	bookshelves, languages,	media_type,	formats, download_count, copyright } = req.body
            db.query("INSERT INTO livros (title, authors, subjects,	idLivro, livro,	imagem,	fk_usuario,	translators, bookshelves, languages, media_type, formats, download_count, copyright) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [title, authors,	subjects, idLivro, livro, imagem, fk_usuario, translators,	bookshelves, languages,	media_type,	formats, download_count, copyright]
            );
            return res.status(200).json({message: "Livro inserido com sucesso!"})
    } catch (err){
        return res.status(500).json({message: "erro ao inserir livro"})
    }
}