import knex, { Knex } from "knex";
import database from "../config/database";
import { Request, Response } from 'express';

class GioithieuController {
  
  public static async GET(req: Request, res: Response): Promise<void> {
    const users = await database.database('users').select('*');
    console.log("đã truy cập vào trang giới thiệu");
    console.time("thời gian truy cập vào trang giới thiệu");
    res.status(200).json(users);
  }
  public static async POST(req: Request, res: Response): Promise<void> {
    const { name, bio } = req.body;
    console.log(req.body);
    console.log(name, bio);
    if (!name || !bio) {
      res.status(400).json({ message: 'không có dữ liệu nào cả ' });
      return;
    }
    try {
      const [newAdmin] = await database.database('users').insert({ name, bio });
      res.status(201).json({
        message: 'thành công thêm dữ liệu',
        admin: newAdmin,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'không thành công thêm dữ liệu', error: err });
    };
  }
  public static async PUT(req: Request, res: Response): Promise<void> {
    const { name, bio } = req.body;
    const { id } = req.params;

    console.log("đã truy cập để sửa dữ liệu " + id + " đổi thành " + name + " " + bio);
    if (!name || !bio) {
      res.status(400).json({ message: 'không có dữ liệu nào cả ' });
      return;
    }
    try {
      await database.database('users').where('id', id).update({ name, bio });
      res.status(200).json({ message: "thành công update dữ liệu " + id 
       });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'không thành công update dữ liệu', error: err });
    };
  }
  public static async DELETE(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      await database.database('users').where('id', id).del();
      console.log("đã xóa dữ liệu" + id);  
      res.status(200).json({ message: 'thành công xóa dữ liệu' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'không thành công xóa dữ liệu', error: err });
    }
  }
}

export default GioithieuController;