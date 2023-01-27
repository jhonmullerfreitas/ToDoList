import users from "../database/user";
import {v4 as uuidv4} from "uuid";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export class UserService {
    static create = async (email, password) =>{
        const userExists = users.find((user)=>user.email === email);
        if(userExists){
            return "Este email já está cadastrado";
        };

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = {
            id: uuidv4(),
            email,
            password: passwordHash,
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

    static loginUser = (email, password) => {

        const user = users.find((user)=> user.email === email);
        if(!user){
            return "Email ou senha inválidos."
        }

        const passwordMatch = bcrypt.compareSync(password, user.password)

        if(!passwordMatch){
            return "Email ou senha inválidos."
        }

        const token = jwt.sign({email: user.email, idUser: user.id}, "SECRET_KEY", {expiresIn: "1h"})

        return {token: token, id: user.id}
    }
}