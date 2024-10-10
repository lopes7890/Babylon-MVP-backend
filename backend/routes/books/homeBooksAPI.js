import fetch from 'node-fetch'; 

export async function getRandomBooks() {
  const randomPage = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
  const url = `https://gutendex.com/books/?page=${randomPage}&page_size=10`;

  try {
    // Buscar livros 
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return `Nenhum livro encontrado na página ${randomPage}`;
    }

    // Selecionar livros 
    const randomBooks = data.results.map(book => ({
        title: book.title,
        authors: book.authors.map(a => a.name).join(', '),
        book: book.formats['text/html'] || 'Link não disponível',
        view: book.formats['image/jpeg'] || 'Link nao disponível'
    }));

    return randomBooks;
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
    return { error: 'Erro ao buscar os livros' };
  }
}
