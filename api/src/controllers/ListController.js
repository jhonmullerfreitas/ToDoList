import { ListService } from "../services/ListService";

export class ListController {

    static create = (request, response) => {
        const {name} = request.body
        const list = ListService.create(name)
        return response.json(list)
    }

    static readAll = (request, response) => {
        const lists = ListService.readAll()
        return response.json(lists)
    }

    static updateList = (request, response) => {
        const {id} = request.params
        const {name} = request.body
        const listUpdated = ListService.updateList(id, name)
        return response.json(listUpdated)
    }

    static deleteList = (request, response) => {
        const {id} = request.params
        const listDeleted = ListService.deleteList(id)
        return response.json(listDeleted)
    }

}