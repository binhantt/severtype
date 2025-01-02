import knex, { Knex } from "knex";
import database from "../config/database";
import { Request, Response } from 'express';

class hoctapController {
  public static async GET(req: Request, res: Response): Promise<void>  {
    const users = await database.database('skills').select('*');
    console.log("đã truy cập vào trang học tập");
    res.status(200).json(users);
  }
  public static async POST(req: Request, res: Response): Promise<void> {
    const { title, icon_url } = req.body;
    console.log(req.body);
    console.log(icon_url, title);
    if (!title ||!icon_url) {
      res.status(400).json({ message: 'không có dữ liệu nào cả ' });
      return;
    }
    // try {
    //   const [newAdmin] = await database.database('skills').insert({ title, icon_url });
    //   res.status(201).json({
    //     message: 'Admin created successfully!',
    //     admin: newAdmin,
    //   });
    // } catch (err) {
    //   console.error(err);
    //   res.status(500).json({ message: 'Error creating admin' ,error : err}); };
     }
  }
export default hoctapController ;