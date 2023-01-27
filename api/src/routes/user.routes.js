import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();

export const userRoutes = () => {
    routes.post("", UserController.create);
    routes.post("/login", UserController.loginUser)
    routes.get("", UserController.readAll);
    routes.patch("/:id", UserController.updateUser);
    routes.delete("/:id", UserController.deleteUser);

    return routes;
}