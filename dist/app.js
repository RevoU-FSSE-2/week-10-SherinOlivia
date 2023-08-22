"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongomiddleware_1 = __importDefault(require("./middleware/mongomiddleware"));
require("dotenv/config");
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(mongomiddleware_1.default);
app.use(mainRouter_1.default);
app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
