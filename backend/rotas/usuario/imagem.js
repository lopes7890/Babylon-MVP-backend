import { db } from "../../db.js";

export const imagemUsuario = async (req, res, id) => {
    try{
        if (!req.file) {
            return res.status(400).json({ message: 'Arquivo não enviado' });
        }

        if (!id) {
            return res.status(400).json({ message: 'ID do usuário não fornecido' });
        }

        const {filename, path: filepath} = req.file;
        await db.query('UPDATE usuario SET imagem = ?, filepath = ? WHERE idUsuario = ?', 
         [filename, filepath, id]
        );
        return res.status(200).json({ filepath: filepath });
    
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'erro ao inserir imagem', err });
    }
}