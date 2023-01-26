import users from "../database/user"
import {v4 as uuidv4} from "uuid"

export class UserService {

    static create = (email, password) =>{
        const userExists = users.find((user)=>user.email === email);
        if(userExists){
            return "Este email já está cadastrado";
        };
        const newUser = {
            id: uuidv4(),
            email,
            password,
        }
        users.push(newUser);
        return newUser;
    } 

    static readAll = () => {
        return users;
    }

    static updateUser = (id, email, password) => {
        const userUpdated = {
            id,
            email, 
            password,
        }
        const userIndex = users.findIndex(user => user.id === id)
        if(userIndex === -1){
            return "Usuário não encontrado."
        }
        users[userIndex] = {...users[userIndex], ...userUpdated};
        return users[userIndex]
    }

    static deleteUser = (id) => {
        const userIndex = users.findIndex((user)=> user.id === id);
        if(userIndex === -1){
            return "Usuário não encontrado.";
        }
        users.splice(userIndex, 1);
        return "Usuário excluído";
    }
}