import { ListService } from "../services/ListService";

export class ListController {

    static create = (request, response) => {
        const {name} = request.body
        const token = request.headers.authorization
        const list = ListService.create(name, token)
        return response.json(list)
    }

    static readAll = (request, response) => {
        const token = request.headers.authorization
        const lists = ListService.readAll(token)
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