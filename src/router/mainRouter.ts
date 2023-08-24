import express, { Request, Response } from 'express';
import transferrouter from './transfersRouter';
import userRouter from './usersRouter';
import authenMiddleware from '../middleware/authenticationMiddleware';

const router = express.Router();

// main app/page route
router.get("/", function (req: Request, res: Response) {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 10"
    })
})

router.use('/api/users', userRouter)
router.use('/api/transfers', authenMiddleware, transferrouter)

export default router;