import lists from "../database/list";
import {v4 as uuidv4} from "uuid"
import jwt from "jsonwebtoken"

export class ListService {
    static create = (name, token) =>{
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
        token = token.split(" ")[1]
        const decode = jwt.verify(token, "SECRET_KEY")
        const listsUser = lists.filter((list) => list.idUser === decode.idUser)
        return listsUser
    }

    static updateList = (id, name) =>{
        const listIndex = lists.findIndex(list => list.id === id)
        const listUpdate = {
            id,
            name
        }
        lists[listIndex] = {...lists[listIndex], ...listUpdate}
        return lists[listIndex]
    }

    static deleteList = (id) => {
        const listIndex = lists.findIndex(list => list.id === id)
        lists.splice(listIndex, 1);
        return "Lista excluída";
    }
}