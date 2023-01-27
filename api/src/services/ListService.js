import lists from "../database/list";
import {v4 as uuidv4} from "uuid"
import jwt from "jsonwebtoken"

export class ListService {
    static create = (name, token) =>{
        if(!token){
            return "Você precisa fazer login."
        }

        token = token.split(" ")[1]
        const decode = jwt.verify(token, "SECRET_KEY")

        const newList = {
            id: uuidv4(),
            idUser: decode.idUser,
            name,
            items: [],
        }

        lists.push(newList);
        
        return newList;
    }

    static readAll = (token) => {
        if(!token){
            return "Você precisa fazer login."
        }

        token = token.split(" ")[1]
        const decode = jwt.verify(token, "SECRET_KEY")

        const listsUser = lists.filter((list) => list.idUser === decode.idUser)
        return listsUser
    }

    static updateList = (id, name, token) =>{
        if(!token){
            return "Você precisa fazer login."
        }

        token = token.split(" ")[1]
        const decode = jwt.verify(token, "SECRET_KEY")

        const listIndex = lists.findIndex(list => list.id === id)
        if(listIndex === -1){
            return "Lista não encontrada."
        }
        
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para atualizar esta lista."
        }

        const listUpdate = {
            id,
            name
        }

        lists[listIndex] = {...lists[listIndex], ...listUpdate}
        return lists[listIndex]
    }

    static deleteList = (id, token) => {
        if(!token){
            return "Você precisa fazer login."
        }

        token = token.split(" ")[1]
        const decode = jwt.verify(token, "SECRET_KEY")

        const listIndex = lists.findIndex(list => list.id === id)
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para deletar esta lista."
        }

        lists.splice(listIndex, 1);
        return "Lista excluída";
    }
}