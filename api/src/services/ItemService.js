import lists from "../database/list";
import {v4 as uuidv4} from "uuid"

export class ItemService {

    static create = (idList, nameItem) =>{
        const listIndex = lists.findIndex((list)=>list.id===idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const newItem = {
            nameItem,
            idItem: uuidv4(),
            done: false
        }

        lists[listIndex].items.push(newItem)

        return lists[listIndex];
    }

    static readAll = (idList) => {
        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        return lists[listIndex].items;
    }

    static updateItem = (idList, nameItem, idItem) => {

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items[itemIndex].nameItem = nameItem


        return lists[listIndex].items[itemIndex]
    }

    static doneItem = (idList, idItem) => {

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items[itemIndex].done = !(lists[listIndex].items[itemIndex].done)


        return lists[listIndex].items[itemIndex]
    }

    static deleteItem = (idList, idItem) => {

        const listIndex = lists.findIndex((list)=> list.id === idList);
        if(listIndex === -1){
            return "Lista não encontrada."
        }

        const itemIndex = lists[listIndex].items.findIndex((item)=> item.idItem===idItem)
        if(itemIndex === -1){
            return "Item não encontrado"
        }

        lists[listIndex].items.splice(itemIndex, 1)

        return lists[listIndex].items
    }
}