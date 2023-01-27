import { Router } from "express";
import {ListController} from "../controllers/ListController"

const routes = Router();

export const listRoutes = () => {
    routes.post("", ListController.create);
    routes.get("", ListController.readAll);
    routes.patch("/:id", ListController.updateList);
    routes.delete("/:id", ListController.deleteList);
    return routes;
}