import { ItemService } from "../services/ItemService";

export class ItemController {

    static create = (request, response) => {
        const {name} = request.body
        const {id} = request.params

        const itemCreated = ItemService.create(id, name)
        return response.json(itemCreated)
    }

    static readAll = (request, response) => {
        const {id} = request.params
        const allItems = ItemService.readAll(id)
        return response.json(allItems)
    }

    static updateItem = (request, response) => {
        const {id} = request.params
        const {name, idItem} = request.body

        const itemUpdated = ItemService.updateItem(id, name, idItem);

        return response.json(itemUpdated);
    }

    static doneItem = (request, response) => {
        const {id} = request.params
        const {idItem} = request.body

        const doneItem = ItemService.doneItem(id, idItem)
        return response.json(doneItem)
    }

    static deleteItem = (request, response) => {
        const {id} = request.params
        const {idItem} = request.body

        const deletedItem = ItemService.deleteItem(id, idItem)
        return response.json(deletedItem)
    }

}