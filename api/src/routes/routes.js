import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ListController } from "../controllers/ListController";

const routes = Router()

routes.post("/users", UserController.create);
routes.get("/users", UserController.readAll);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

routes.post("/lists", ListController.create);
routes.get("/lists", ListController.readAll);
routes.patch("/lists/:id", ListController.updateList);
routes.delete("/lists/:id", ListController.deleteList);

export default routes;