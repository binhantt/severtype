import { Router, Request, Response } from "express";
import Gioithieu from "../controller/Gioithieu";
import hoctapController from "../controller/hoctap";
import SanPhamcontroller from "../controller/SanPham";
import login from "../Middleware/Login";
import { group, groupWithMiddleware } from "../utils/routerGroup";  
const adminRouter = Router();
groupWithMiddleware(adminRouter , "/",login,(routers) => {
    group (routers, "/gioithieu", (router) => {
        router.get("/", Gioithieu.GET);
        router.post("/them", Gioithieu.POST);
        router.delete("/xoa/:id", Gioithieu.DELETE);
        router.put("/sua/:id", Gioithieu.PUT);
    }); 
});
adminRouter.get("/hoctap", hoctapController.GET)
adminRouter.post("/guidulieuhoctap", hoctapController.POST)
adminRouter.get("/sanpham", SanPhamcontroller.GET) ;

export default adminRouter;
