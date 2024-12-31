import express from "express";
import router from "./router";
import startServer from "./config/sever";
import "./config/database";
const app = express();
app.use(express.json());
app.use("/api", router);
startServer(app);