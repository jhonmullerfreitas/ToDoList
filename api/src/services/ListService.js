import lists from "../database/list";
import {v4 as uuidv4} from "uuid"

export class ListService {

    static create = (name) =>{
        const nameListExists = lists.find((list)=> list.name === name)
        if(nameListExists){
            return "Já existe uma lista com este nome."
        }

        const newList = {
            id: uuidv4(),
            name,
            items: [],
        }

        lists.push(newList);
        
        return newList;
    }

    static readAll = () => {
        return lists
    }

    static updateList = (id, name) =>{
        const listUpdate = {
            id,
            name
        }

        const nameListExists = lists.find((list)=> list.name === name)
        if(nameListExists){
            return "Já existe uma lista com este nome."
        }

        const listIndex = lists.findIndex(list => list.id === id)
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        lists[listIndex] = {...lists[listIndex], ...listUpdate}

        return lists[listIndex]
    }

    static deleteList = (id) => {
        const listIndex = lists.findIndex(list => list.id === id)
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        lists.splice(listIndex, 1);
        return "Lista excluída";
    }
}