import { ItemService } from "../services/ItemService";

export class ItemController {

    static create = (request, response) => {
        const {name} = request.body
        const {id} = request.params
        const token = request.headers.authorization

        const itemCreated = ItemService.create(id, name, token)
        return response.json(itemCreated)
    }

    static readAll = (request, response) => {
        const {id} = request.params
        const token = request.headers.authorization
        const allItems = ItemService.readAll(id, token)
        return response.json(allItems)
    }

    static updateItem = (request, response) => {
        const {id} = request.params
        const {name, idItem} = request.body
        const token = request.headers.authorization

        const itemUpdated = ItemService.updateItem(id, name, idItem, token);

        return response.json(itemUpdated);
    }

    static doneItem = (request, response) => {
        const {id} = request.params
        const {idItem} = request.body
        const token = request.headers.authorization

        const doneItem = ItemService.doneItem(id, idItem, token)
        return response.json(doneItem)
    }

    static deleteItem = (request, response) => {
        const {id} = request.params
        const {idItem} = request.body
        const token = request.headers.authorization

        const deletedItem = ItemService.deleteItem(id, idItem, token)
        return response.json(deletedItem)
    }

}