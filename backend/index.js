import express from "express";
import cors from "cors";
import "dotenv/config";
import { readingBook } from "./routes/library/library.js";
import { postlibrary } from "./routes/library/libraryPost.js";
import { getClub } from "./routes/club/bookClube.js";
import { Postusers } from "./routes/users/usersPost.js";
import { bookClubPost } from "./routes/club/bookClubePost.js";
import { loginUsers } from "./routes/users/login.js";
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async function(req, res) {
    try{
        await loginUsers(req, res)
    } catch (error) {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.post("/user", async function(req, res){
    try{
        await Postusers(req, res);
    } catch (error) {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
});

app.get("/library", async function(req, res){
    try{
        const resultLibrary = await readingBook();
        res.json(resultLibrary);
    } catch (error) {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.post("/library", async function(req, res){
    try{
        await postlibrary(req, res)
    } catch (error) {
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.get("/club", async function(req, res){
    try{
        const resultClub = await getClub();
        res.json(resultClub)
    } catch (error){
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.post("/club", async function(req, res){
    try{
        await bookClubPost(req, res);
    } catch (error){
        res.status(500).send("Não foi possivel estabelecer uma conexão", error);
    }
})

app.get("/", function(req, res){
    res.send("teste")
})

app.listen(port, () => {
  console.log("Servidor rodando na porta 8080");
});
