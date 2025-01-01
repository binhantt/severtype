import database from "../config/database";
import { Request, Response } from 'express';
class AdminController {
  public static async GET(req: Request, res: Response): Promise<void>  {
    const users = await database.database('users').select('*');
    res.status(200).json(users);
  }
}
export default AdminController;