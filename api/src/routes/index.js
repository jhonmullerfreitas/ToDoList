import { userRoutes } from "./user.routes"
import { listRoutes } from "./list.routes"
import { itemRoutes } from "./items.routes"

export const appRoutes = (app) => {
    app.use("/user", userRoutes());
    app.use("/list", listRoutes());
    app.use("/item", itemRoutes());
}