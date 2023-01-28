import { UserService } from "../services/UserService"
export class UserController {
    static create = async (request, response) => {
        const {email, password} = request.body;
        const user = await UserService.create(email, password);
        return response.json(user);
    }
    static readAll = (request, response) => {
        const users = UserService.readAll();
        return response.json(users);
    }
    static updateUser = async (request, response) => {
        const {id} = request.params;
        const {email, password} = request.body;
        const userUpdate = await UserService.updateUser(id, email, password);
        return response.json(userUpdate);
    }
    static deleteUser = (request, response) => {
        const {id} = request.params;
        const userDeleted = UserService.deleteUser(id);
        return response.json(userDeleted);
    }

    static loginUser = (request, response) => {
        const {email, password} = request.body

        const userLogin = UserService.loginUser(email, password)

        return response.json(userLogin);
    }
}