import express from "express";
import router from "./routers/router";
import startServer from "./config/sever";
import database from "./config/database";
const app = express();
require('express-group-routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
database.connect();
startServer(app);