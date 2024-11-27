import { db } from "../../db.js";

export const imagemUsuario = async (req, res, id) => {
    try{
        const {filename, path: filepath} = req.file;
        await db.query('UPDATE usuario SET imagem = ?, filepath = ? WHERE idUsuario = ?', 
         [filename, filepath, id]
        );
        return res.status(200).json({ filepath: filepath });
    
    } catch (err) {
        return res.status(500).json({ message: 'erro ao inserir imagem' });
    }
}