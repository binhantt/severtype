import { Router } from "express";
import adminRouter from "./admin";

const router = Router();
router.use("/v1", adminRouter);

export default router;
