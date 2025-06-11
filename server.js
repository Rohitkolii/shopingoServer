import express from "express";
import { router as authrouter } from "./router/authrouter.js";
import { router as productsrouter } from "./router/productsrouter.js";
import { router as cartrouter } from "./router/cartrouter.js";
import { router as orderrouter } from "./router/orderrouter.js";
import cors from "cors"

import DBConnection from "./utils/db.js";

const app = express()

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials:true
}

app.use(cors(corsOptions));

app.use(express.json())

app.use('/uploads', express.static('uploads'));

app.use("/api/auth", authrouter)
app.use("/api/products", productsrouter)
app.use("/api/cart", cartrouter)
app.use("/api/order", orderrouter)

const PORT = 3001;
DBConnection().then(()=> {
    app.listen(PORT, ()=> {
        console.log(`Port is Running on PORT: ${PORT}`);
    })
})