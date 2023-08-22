"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transferrouter = express_1.default.Router();
const transfersService_1 = __importDefault(require("../services/transfersService"));
// get all transaction data
transferrouter.get('/', transfersService_1.default.getAllTransfers);
// post or create new transfer request
transferrouter.post('/new', transfersService_1.default.createTransfer);
exports.default = transferrouter;
