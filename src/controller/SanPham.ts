import database from "../config/database";
import { Request, Response } from 'express';
class SanPhamcontroller {
     public static async GET(req: Request, res: Response): Promise<void>  {
        const users = await database.database('projects').select('*');
        console.log("đã truy cập vào trang sản phẩm");
        res.status(200).json(users);
      }
}
export default SanPhamcontroller;