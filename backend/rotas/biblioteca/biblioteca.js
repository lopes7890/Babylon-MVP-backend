import { db } from '../../db.js';

export const lendoLivro = async (id) => {
  try {
    const [resultadoTabelaBiblioteca] = await db.query(
      'SELECT * FROM livros WHERE fk_usuario = ?',
      [id]
    );

    console.log('Resultados obtidos: ', resultadoTabelaBiblioteca);

    // Transformando os dados em objetos para ser retornado
    const returnData = resultadoTabelaBiblioteca.map((data) => {
      const returnDataParsed = {
        title: data.title,
        authors: JSON.parse(data.authors),
        subjects: JSON.parse(data.subjects),
        idLivro: data.idLivro,
        formats: JSON.parse(data.formats),
      };

      return returnDataParsed;
    });

    return returnData;
  } catch (err) {
    console.error('Erro na consulta:', err.stack);
    return;
  }
};
