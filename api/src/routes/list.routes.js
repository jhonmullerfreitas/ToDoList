import { Router } from "express";
import {ListController} from "../controllers/ListController"
import { MiddlewareUtils } from "../middlewares";

const routes = Router();

export const listRoutes = () => {
    routes.post(
        "", 
        MiddlewareUtils.verifyUserAuth, 
        ListController.create
    );

    routes.get(
        "", 
        MiddlewareUtils.verifyUserAuth, 
        ListController.readAll
    );

    routes.patch(
        "/:id", 
        MiddlewareUtils.verifyUserAuth, 
        MiddlewareUtils.verifyUserAuthorizationList , 
        ListController.updateList
    );

    routes.delete(
        "/:id", 
        MiddlewareUtils.verifyUserAuth, 
        MiddlewareUtils.verifyUserAuthorizationList,
        ListController.deleteList
    );

    return routes;
}