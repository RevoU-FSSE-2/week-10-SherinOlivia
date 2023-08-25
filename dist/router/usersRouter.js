"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersService_1 = __importDefault(require("../services/usersService"));
const authorizationMiddleware_1 = __importDefault(require("../middleware/authorizationMiddleware"));
const userRouter = express_1.default.Router();
// Get all user data
userRouter.get('/', authorizationMiddleware_1.default, usersService_1.default.getAllUsers);
// register new user
userRouter.post('/register', usersService_1.default.registerUser);
// post or create new transfer request
userRouter.post('/login', usersService_1.default.loginUser);
exports.default = userRouter;
