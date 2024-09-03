import express from "express";
import cors from "cors";
import { lendoLivro } from "./routes/biblioteca.js";
import { rotaUsuario } from "./routes/usuarios/user.js";
import { getClube } from "./routes/clubeDoLivro.js";
import { Postusuarios } from "./routes/usuarios/usuariosPost.js";
const port = process.env.PORT || 8080;
const app = express();
const acess = cors()
app.use(express.json());
app.use(acess());

app.get("/usuario", acess(), async function(req, res){
    try{
        const resultUser = await rotaUsuario();
        res.json(resultUser);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
    
})

app.post("/usuario", acess(), async function(req, res){
    try{
        const postUser = await Postusuarios(req)
        res.send(postUser)
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
});

app.get("/biblioteca", acess(), async function(req, res){
    try{
        const resultBiblioteca = await lendoLivro();
        res.json(resultBiblioteca);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

app.get("/clube", acess(), async function(req, res){
    try{
        const resultClube = await getClube();
        res.json(resultClube)
    } catch{
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

app.get("/", acess(), (req, res) => {
  res.send("API  rodando ...");
});
app.listen(port, () => {
  console.log("Servidor rodando na porta 8080");
});
