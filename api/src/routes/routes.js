import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ListController } from "../controllers/ListController";
import { ItemController } from "../controllers/ItemController";

const routes = Router()

routes.post("/users", UserController.create);
routes.post("/users/login", UserController.loginUser)
routes.get("/users", UserController.readAll);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

routes.post("/lists", ListController.create);
routes.get("/lists", ListController.readAll);
routes.patch("/lists/:id", ListController.updateList);
routes.delete("/lists/:id", ListController.deleteList);

routes.post("/item/:id", ItemController.create);
routes.get("/item/:id", ItemController.readAll);
routes.patch("/item/:id", ItemController.updateItem);
routes.put("/item/:id", ItemController.doneItem);
routes.delete("/item/:id", ItemController.deleteItem);


export default routes;