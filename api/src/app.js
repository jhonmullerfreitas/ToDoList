import express from "express"
import routes from "./routes/routes";

const app = express()

app.use(express.json());
app.use(routes)

const port = 3001
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`);
})

