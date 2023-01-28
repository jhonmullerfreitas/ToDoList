import { Router } from "express";
import { ItemController } from "../controllers/ItemController"
import { MiddlewareUtils } from "../middlewares";

const routes = Router()

export const itemRoutes = () => {
    routes.post(
        "/:id",
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorizationList,
        ItemController.create
    );

    routes.get(
        "/:id", 
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorizationList,
        ItemController.readAll
    );

    routes.patch(
        "/:id", 
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorizationList,
        ItemController.updateItem
    );

    routes.put(
        "/:id", 
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorizationList,
        ItemController.doneItem
    );

    routes.delete(
        "/:id", 
        MiddlewareUtils.verifyUserAuth,
        MiddlewareUtils.verifyUserAuthorizationList,
        ItemController.deleteItem
    );

    return routes;
}