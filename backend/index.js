import express from "express";
import { lendoLivro } from "./routes/biblioteca.js";
import { rotaUsuario } from "./routes/user.js";
import { clubeDeLeitura } from "./routes/clubeDoLivro.js";
const port = process.env.PORT || 8080;
const app = express();

app.get("/usuario", async function(req, res){
    try{
        const resultUser = await rotaUsuario();
        res.json(resultUser);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
    
})

app.get("/biblioteca", async function(req, res){
    try{
        const resultBiblioteca = await lendoLivro();
        res.json(resultBiblioteca);
    } catch {
        res.status(500).send("Não foi possivel estabelecer uma conexão");
    }
})

// Tabela não está pronta
/* app.get("/clube", function(req, res){
    // clubeDeLeitura()
}) */

app.get("/", (req, res) => {
  res.send("API  rodando ...");
});
app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
