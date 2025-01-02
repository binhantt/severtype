import { Router } from "express";
import adminRouter from "./admin";
import user from "./Userrouter";
const router = Router();
router.use("/v1/admin", adminRouter);
router.use("/v1/user", user);
export default router;
