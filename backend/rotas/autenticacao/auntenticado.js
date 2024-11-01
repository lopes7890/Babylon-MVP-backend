import jwt from 'jsonwebtoken';

export const autenticarToken = async (req, res, next) => {
    try{
        const token = req.headers['authorization']; // Pega o token do cabeçalho Authorization
        //console.log(token)
        if (!token){
            return res.status(401).send("Token não fornecido.");
        }

        jwt.verify(token, 'secret', (err, decoded) => {
            if (err){
                if (err.name == 'TokenExpiredError'){
                    return res.status(403).send("Token expirado, Fazer login novamente!")
                }
                console.log(err)
                return res.status(403).send("Token inválido.");
            }
            //console.log(decoded)
            req.idUsuario = decoded.id; // Guarda o id do usuário 
            next();
        });
    } catch{

    }
}