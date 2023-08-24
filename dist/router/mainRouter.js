"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transfersRouter_1 = __importDefault(require("./transfersRouter"));
const usersRouter_1 = __importDefault(require("./usersRouter"));
const authenticationMiddleware_1 = __importDefault(require("../middleware/authenticationMiddleware"));
const router = express_1.default.Router();
// main app/page route
router.get("/", function (req, res) {
    res.status(200).json({
        success: true,
        message: "Hello, this is Sherin Olivia's Assignment for Week 10"
    });
});
router.use('/api/users', usersRouter_1.default);
router.use('/api/transfers', authenticationMiddleware_1.default, transfersRouter_1.default);
exports.default = router;
