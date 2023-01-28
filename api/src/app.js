import express from "express"
import cors from "cors"
import { appRoutes } from "./routes";

const app = express()
app.use(cors())
app.use(express.json());
appRoutes(app)

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`);
})

