import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { MiddlewareUtils } from "../middlewares";

const routes = Router();

export const userRoutes = () => {
    routes.post(
        "", 
        MiddlewareUtils.verifyEmail,
        UserController.create
    );

    routes.post(
        "/login", 
        UserController.loginUser
    );

    routes.get(
        "",
        MiddlewareUtils.verifyUserAuth,
        UserController.readAll
    );

    routes.patch(
        "/:id", 
        MiddlewareUtils.verifyEmail,
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorization,
        UserController.updateUser
    );

    routes.delete(
        "/:id", 
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorization,
        UserController.deleteUser
    );

    return routes;
}