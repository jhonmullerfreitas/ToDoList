import express from "express"
import routes from "./routes/userRoutes";


const app = express()

app.use(express.json());
app.use(routes)

app.get('/', (req, res)=>{
    return res.send('Hello, ToDoList');
});

const port = 3001
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`);
})

