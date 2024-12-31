import express, { Application } from "express";

const app: Application = express();
const PORT = 3000;

// Hàm khởi động server
const startServer = (app: Application): void => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
};

export default startServer;
