import { Request, Response, NextFunction } from "express";
import bcrypt from 'bcrypt'
import jwt, { Secret } from 'jsonwebtoken'
import JWT_TOKEN from '../config/jwtconfig'
import { error } from "console";

const getAllUsers = async (req:any, res:Response) => {
    try {
      const users = await req.db.collection('users').find().toArray()
      
      res.status(200).json({
        message: 'All User Data Successfully Retrieved',
        data: users
      })
    } catch (error) {
      res.status(500).json({ error })
    }
}

const registerUser = async (req:any, res:Response, next:NextFunction) => {
    try {
        const { username, password, role } = req.body;
        const user = await req.db.collection('users').findOne({ username })

        if (role !== "Approver" && role !== "Maker") {
            res.status(400).json({ error: "Invalid role..! Available Roles: Approver or Maker." });
            return;

        } else if (user){
            throw new Error('Username already exists..!')
        }

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await req.db.collection('users').insertOne({ username, password: passwordHash, role })
        res.status(200).json({
          message: 'User successfully registered',
          data: newUser,  
        }) 
    } catch (error) {
        res.status(500).json({ error: 'Invalid Register Request..!!'})
    }
    next(error)
}

const loginUser =async (req:any, res: Response) => {
    try {
        const { username, password } = req.body
        const user = await req.db.collection('users').findOne({ username })
    
        const passwordCheck = await bcrypt.compare(password, user.password) 
        if (passwordCheck) {
            const token = jwt.sign({ username: user.username, id: user._id, role: user.role }, JWT_TOKEN as Secret)
            res.status(200).json({
              message: `${user.username} Successfully logged in as ${user.role}`,
              data: token
            })
          } else {
            res.status(400).json({ error: 'Password is incorrect' })
          }
    } catch (error) {
        res.status(500).json({ error });
    }
}

const userData = { getAllUsers, registerUser, loginUser }
export default userData