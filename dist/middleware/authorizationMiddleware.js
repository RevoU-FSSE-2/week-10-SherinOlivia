"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtconfig_1 = __importDefault(require("../config/jwtconfig"));
const authorMiddleware = (req, res, next) => {
    const authen = req.headers.authorization;
    if (!authen) {
        res.status(400).json({ error: "Unauthorized Access!!" });
    }
    else {
        const secretToken = authen.split(' ')[1];
        try {
            const decodedToken = jsonwebtoken_1.default.verify(secretToken, jwtconfig_1.default);
            if (decodedToken.role === "Approver") {
            }
            console.log(decodedToken, `= Decode test`);
            next();
        }
        catch (error) {
            res.status(400).json({ error: error });
        }
    }
};
// ===============================AUTHORIZATION MIDDLEWARE STILL WIP
exports.default = authorMiddleware;
