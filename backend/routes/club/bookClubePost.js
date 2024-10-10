import { db } from "../../db.js";

export const bookClubPost = async (req, res) => {
    try{
        const {nameClub, image_club, link_club} = req.body;
        await db.query('INSERT INTO ClubeLivro (nomeClub, foto_club, link_club) VALUES (?, ?, ?)', 
        [nameClub, image_club, link_club]);
        res.status(200).json({ message: "Clube inserido com sucesso!" });
    } catch (err){
        console.log(err)
        res.status(500).json({ message: "Erro ao inserir Clube" });
    }

}