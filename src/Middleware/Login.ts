// loginController.ts
import { Request, Response ,NextFunction  } from 'express';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';
export const login = (req: Request, res: Response ,next : NextFunction) => {
  const { email, password } = req.body;
  const clientIp = req.ip; 
  console.log(email,password ,clientIp);
  const users = [
    {
      id: 1,
      email: 'doan44503@gmail.com',
      password: '$2a$10$yMyJ3yPm4zH6gb7OdbBlq.m0t6kN6zFsdbRfZyKrScHMRoVqCH6qe',
    }
  ];
  const user = users.find(u => u.email === email );
  if (!user) {
    console.log("cảnh báo đã có người hack vào hệ thống");
    return res.status(400).json({ message: 'yêu cầu đăng nhập đúng' });
  }
  bcrypt.compare(user.email, user.password, (err: Error | null) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi máy chủ ' });
    }
    next();  
  });
};
export default login;