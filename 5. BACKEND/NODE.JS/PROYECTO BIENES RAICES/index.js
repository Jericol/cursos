import express from "express";
import userRoutes from "./routes/userRouter.js";

const app = express();

app.set("view engine", 'pug');
app.set('views', './views')

app.use('/', userRoutes)

const port = 3000;

app.listen(port, () => {
    console.log(`Abriendo el puerto ${port}`)
})