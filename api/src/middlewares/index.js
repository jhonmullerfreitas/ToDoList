import users from "../database/user";
import lists from "../database/list";
import jwt from "jsonwebtoken"

export class MiddlewareUtils {

    static verifyEmail = (request, response, next) => {
        const {email} = request.body;
        const emailExists = users.find((user)=> user.email === email);
        if(emailExists){
            return response
                .status(400)
                .json({message: "Este email já está sendo usado."})
        }
        next();
    }

    static verifyUserAuth = (request, response, next) => {
        let token = request.headers.authorization
        if(!token){
            return response
                .status(401)
                .json({message: "Sem token de autorização"})
        }
        token = token.split(" ")[1]
        jwt.verify(token, "SECRET_KEY", (error, decoded) => {
            if(error){
                return response.status(401).json({message: "Token Inválido"});
            }
        })
        next();
    }

    static verifyUserAuthorization = (request, response, next) => {
        const {id} = request.params
        const user = users.find((user)=> user.id === id)

        if(!user){
            return response
                .status(401)
                .json({message: "Usuário não encontrado"})
        }

        let token = request.headers.authorization
        token = token.split(" ")[1]
        jwt.verify(token, "SECRET_KEY", (error, decoded) => {
            if(error){
                return response.status(401).json({message: "Token Inválido"});
            }

            if(decoded.idUser !== user.id){
                return response
                    .status(401)
                    .json({message: "Usuário não autorizado."})
            }
            next()
        })
        
    }

    static verifyUserAuthorizationList = (request, response, next) => {
        const {id} = request.params
        let token = request.headers.authorization
        const listIndex = lists.findIndex(list => list.id === id)
        if(listIndex === -1){
            return "Lista não encontrada."
        }
        token = token.split(" ")[1]
        jwt.verify(token, "SECRET_KEY", (error, decoded) => {
            if(error){
                return response.status(401).json({message: "Token Inválido"});
            }
            if(decoded.idUser !== lists[listIndex].idUser){
                return response.status(401).json({message: "Você não tem permissão para alterar essa lista."});
            }
            next();
        })
    }
}