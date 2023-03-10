import { UserService } from "../services/UserService"
export class UserController {
    static create = async (request, response) => {
        const {email, password} = request.body;
        const user = await UserService.create(email, password);
        return response.status(201).json(user);  
    }

    static userDetail = (request, response) => {
        const {id} = request.params
        const user = UserService.userDetail(id);
        return response.status(200).json(user)
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
        try {
            const {email, password} = request.body
            const userLogin = UserService.loginUser(email, password)
            return response.status(200).json(userLogin);
        } catch (err) {
            if(err instanceof Error){
                return response.status(401).send({
                    error: err.name,
                    message: err.message
                });
            }
        }
    }
}