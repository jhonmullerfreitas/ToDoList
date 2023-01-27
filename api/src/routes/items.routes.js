import { Router } from "express";
import { ItemController } from "../controllers/ItemController"

const routes = Router()

export const itemRoutes = () => {
    routes.post("/:id", ItemController.create);
    routes.get("/:id", ItemController.readAll);
    routes.patch("/:id", ItemController.updateItem);
    routes.put("/:id", ItemController.doneItem);
    routes.delete("/:id", ItemController.deleteItem);
    return routes;
}