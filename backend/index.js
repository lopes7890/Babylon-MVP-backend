import express from "express";
import cors from "cors";
import "dotenv/config";
import { lendoLivro } from "./routes/biblioteca/biblioteca.js";
import { postBiblioteca } from "./routes/biblioteca/bibliotecaPost.js";
//import { rotaUsuario } from "./routes/usuarios/user.js";
import { getClube } from "./routes/clube/clubeDoLivro.js";
import { Postusuarios } from "./routes/usuarios/usuariosPost.js";
import { clubeDoLivroPost } from "./routes/clube/clubeDoLivroPost.js";
import { loginUsers } from "./routes/usuarios/login.js";
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async function(req, res) {
    try{
        await loginUsers(req, res)
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

/* app.get("/usuario", async function(req, res){
    try{
        const resultUser = await rotaUsuario();
        res.json(resultUser);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
    
}) */

app.post("/usuario", async function(req, res){
    try{
        await Postusuarios(req, res);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
});

app.get("/biblioteca", async function(req, res){
    try{
        const resultBiblioteca = await lendoLivro();
        res.json(resultBiblioteca);
    } catch (error) {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.post("/biblioteca", async function(req, res){
    try{
        await postBiblioteca(req, res)
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
}) 

app.get("/clube", async function(req, res){
    try{
        const resultClube = await getClube();
        res.json(resultClube)
    } catch{
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

app.post("/clube", async function(req, res){
    try{
        await clubeDoLivroPost(req, res);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

app.get("/", (req, res) => {
  res.send("API  rodando ...");
});
app.listen(port, () => {
  console.log("Servidor rodando na porta 8080");
});
