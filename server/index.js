import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js"

dotenv.config();
const app =express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",AuthRoutes)
app.use("/api/messages",MessageRoutes)

const PORT=process.env.PORT;
const server = app.listen(PORT,()=>{
    console.log(`Server started on PORT: ${PORT}`)
});

global.onlineUsers =  new Map();

