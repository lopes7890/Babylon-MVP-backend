import { db } from '../../db.js';

export const postBiblioteca = async (req, res, id) => {
  try {
    const { title, authors, subjects, idLivro, formats } = req.body;

    const formatsFilter = {
      'image/jpeg': formats['image/jpeg'],
      'text/html': formats['text/html'],
    };

    const data = {
      title,
      authors: JSON.stringify(authors),
      subjects: JSON.stringify(subjects),
      idLivro,
      formats: JSON.stringify(formatsFilter),
    };

    // idLivro,
    //  data.idLivro,

    await db.query(
      'INSERT INTO livros (title, authors, subjects, fk_usuario, formats) VALUES (?, ?, ?, ?, ?)',
      [data.title, data.authors, data.subjects, id, data.formats]
    );

    return res.status(200).json({ message: 'Livro inserido com sucesso!' });
  } catch (err) {
    console.error('erro ao inserir livro: ' + err);
    return res.status(500).json({ message: 'erro ao inserir livro' });
  }
};
