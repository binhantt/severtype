import express, { Application } from "express";

const app: Application = express();
const PORT = 8000;
const startServer = (app: Application): void => {
  app.listen(PORT, () => {
    console.log(`máy chủ  :  http://localhost:${PORT}`);
  });
};

export default startServer;
