import express from 'express'
import userData from '../services/usersService'
import authorMiddleware from '../middleware/authorizationMiddleware';

const userRouter = express.Router()

// Get all user data
userRouter.get('/', authorMiddleware, userData.getAllUsers);
// register new user
userRouter.post('/register', userData.registerUser);
// post or create new transfer request
userRouter.post('/login', userData.loginUser);

export default userRouter