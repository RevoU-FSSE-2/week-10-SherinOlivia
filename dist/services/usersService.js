"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtconfig_1 = __importDefault(require("../config/jwtconfig"));
const console_1 = require("console");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, role } = req.body;
        const user = yield req.db.collection('users').findOne({ username });
        if (role !== "Approver" && role !== "Maker") {
            res.status(400).json({ error: "Invalid role..! Available Roles: Approver or Maker." });
            return;
        }
        else if (user) {
            throw new Error('Username already exists..!');
        }
        const passwordHash = yield bcrypt_1.default.hash(password, 10);
        const newUser = yield req.db.collection('users').insertOne({ username, password: passwordHash, role });
        res.status(200).json({
            message: 'User successfully registered',
            data: newUser,
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Invalid Register Request..!!' });
    }
    next(console_1.error);
});
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield req.db.collection('users').findOne({ username });
        const passwordCheck = yield bcrypt_1.default.compare(password, user.password);
        if (passwordCheck) {
            const token = jsonwebtoken_1.default.sign({ username: user.username, id: user._id, role: user.role }, jwtconfig_1.default);
            res.status(200).json({
                message: `${user.username} Successfully logged in as ${user.role}`,
                data: token
            });
        }
        else {
            res.status(400).json({ error: 'Password is incorrect' });
        }
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const userData = { registerUser, loginUser };
exports.default = userData;
