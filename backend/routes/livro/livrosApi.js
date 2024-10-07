import fetch from 'node-fetch'; 

export async function getBooks(titulo) {
  let query = titulo
  const url = `https://gutendex.com/books?search=${query}`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    
    if (!data.results || data.results.length === 0) {
      return `Nenhum livro encontrado para a pesquisa: ${query}`;
    }

    // retornar apenas as informações necessárias
    const formattedBooks = data.results.map(book => {
      return {
        titulo: book.title,
        autor: book.authors.map(a => a.name).join(', '),
        livro: book.formats['text/html'] || 'Link não disponível',
        capa: book.formats['image/jpeg'] || 'Link nao disponível'
      };
    });

    console.log(formattedBooks)

    return formattedBooks;

  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
    return { error: 'Erro ao buscar os livros' };
  }
}

// Exemplo de uso
//getBooks("sherlock holmes").then(books => console.log(books));

  