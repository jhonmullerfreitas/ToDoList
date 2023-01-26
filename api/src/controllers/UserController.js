import { UserService } from "../services/UserService"
export class UserController {
    static create = (request, response) => {
        const {email, password} = request.body;
        const user = UserService.create(email, password);
        return response.json(user);
    }
    static readAll = (request, response) => {
        const users = UserService.readAll();
        return response.json(users);
    }
    static updateUser = (request, response) => {
        const {id} = request.params;
        const {email, password} = request.body;
        const userUpdate = UserService.updateUser(id, email, password);
        return response.json(userUpdate);
    }
    static deleteUser = (request, response) => {
        const {id} = request.params;
        const userDeleted = UserService.deleteUser(id);
        return response.json(userDeleted);
    }
}