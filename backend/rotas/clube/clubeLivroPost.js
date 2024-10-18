import { db } from "../../db.js";

export const postClubeLivro = async (req, res) => {
    try{
        const {nomeClub, foto_club, link_club} = req.body;
        await db.query('INSERT INTO clubelivro (nomeClub, foto_club, link_club) VALUES (?, ?, ?)', 
        [nomeClub, foto_club, link_club]);
        res.status(200).json({ message: "Clube inserido com sucesso!" });
    } catch (err){
        console.log(err)
        res.status(500).json({ message: "Erro ao inserir Clube" });
    }

}