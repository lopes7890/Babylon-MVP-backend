import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { busca } from './rotas/livros/buscaLivros.js';
import { lendoLivro } from './rotas/biblioteca/biblioteca.js';
import { postBiblioteca } from './rotas/biblioteca/bibliotecaPost.js';
import { getClube } from './rotas/clube/clubeLivro.js';
import { postUsuario } from './rotas/usuario/usuarioPost.js';
import { postClubeLivro } from './rotas/clube/clubeLivroPost.js';
import { loginUsuarios } from './rotas/usuario/login.js';
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());

app.post('/login', async function (req, res) {
  try {
    await loginUsuarios(req, res);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.post('/usuario', async function (req, res) {
  try {
    await postUsuario(req, res);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.get('/biblioteca', async function (req, res) {
  try {
    const resultadoBiblioteca = await lendoLivro();
    res.json(resultadoBiblioteca);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.post('/biblioteca', async function (req, res) {
  try {
    await postBiblioteca(req, res);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.get('/clube', async function (req, res) {
  try {
    const resultadoClube = await getClube();
    res.json(resultadoClube);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.post('/clube', async function (req, res) {
  try {
    await postClubeLivro(req, res);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão', error);
  }
});

app.get('/busca', async function (req, res) {
  try {
    const resultadoBusca = await busca(req, res);
    return res.json(resultadoBusca);
  } catch (error) {
    res.status(500).send('Não foi possivel estabelecer uma conexão');
  }
});

app.get('/', function (req, res) {
  res.send('teste');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
