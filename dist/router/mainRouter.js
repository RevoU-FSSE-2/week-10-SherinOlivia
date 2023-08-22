"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transfersRouter_1 = __importDefault(require("./transfersRouter"));
// import userrouter from './UserRouter';
const router = express_1.default.Router();
// main app/page route
router.get("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 10"
    });
});
// router.use('/auth', authRouter)
router.use('/transfers', transfersRouter_1.default);
exports.default = router;
