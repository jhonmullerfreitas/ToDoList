import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router()

routes.post("/users", UserController.create);
routes.get("/users", UserController.readAll);
routes.patch("/users/:id", UserController.updateUser);
routes.delete("/users/:id", UserController.deleteUser);

export default routes;