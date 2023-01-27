import lists from "../database/list";
import {v4 as uuidv4} from "uuid"
import jwt from "jsonwebtoken"

export class ItemService {

    static create = (idList, nameItem, token) =>{

        if(!token){
            return "Você precisa fazer o login."
        }
        token = token.split(" ")[1]
        
        const listIndex = lists.findIndex((list)=>list.id===idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para criar item para essa lista."
        }

        const newItem = {
            nameItem,
            idItem: uuidv4(),
            done: false
        }

        lists[listIndex].items.push(newItem)

        return lists[listIndex];
    }

    static readAll = (idList, token) => {

        if(!token){
            return "Você precisa fazer o login."
        }
        token = token.split(" ")[1]

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para consultar essa lista."
        }

        return lists[listIndex].items;
    }

    static updateItem = (idList, nameItem, idItem, token) => {

        if(!token){
            return "Você precisa fazer o login."
        }
        token = token.split(" ")[1]

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para alterar esta lista."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items[itemIndex].nameItem = nameItem


        return lists[listIndex].items[itemIndex]
    }

    static doneItem = (idList, idItem, token) => {

        if(!token){
            return "Você precisa fazer o login."
        }
        token = token.split(" ")[1]

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para alterar esta lista."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items[itemIndex].done = !(lists[listIndex].items[itemIndex].done)


        return lists[listIndex].items[itemIndex]
    }

    static deleteItem = (idList, idItem, token) => {

        if(!token){
            return "Você precisa fazer o login."
        }
        token = token.split(" ")[1]

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const decode = jwt.verify(token, "SECRET_KEY")
        if(lists[listIndex].idUser !== decode.idUser){
            return "Você não tem autorização para alterar esta lista."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items.splice(itemIndex, 1)

        return lists[listIndex].items
    }
}