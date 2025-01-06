import express, { Application } from "express";
const cors = require('cors');
const app: Application = express();
const PORT = 8000;
const startServer = (app: Application): void => {
  app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  }));
  app.use(express.json());
  app.listen(PORT, () => {
    console.log(`máy chủ  :  http://localhost:${PORT}`);
  });
};

export default startServer;
