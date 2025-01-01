import { Router, Request, Response } from "express";
import AdminController from "../controller/AdminController";
const adminRouter = Router();
adminRouter.get("/get", AdminController.GET);
adminRouter.post("/create", (req: Request, res: Response) => {
  const { name } = req.body;
  res.status(201).json({ message: `Admin ${name} created successfully!` });
});

export default adminRouter;
