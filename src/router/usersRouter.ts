import express from 'express'
import userData from '../services/usersService'

const userRouter = express.Router()

// register new user
userRouter.post('/register', userData.registerUser);
// post or create new transfer request
userRouter.post('/login', userData.loginUser);

export default userRouter