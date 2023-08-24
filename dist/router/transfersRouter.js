"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const transfersService_1 = __importDefault(require("../services/transfersService"));
const authorizationMiddleware_1 = __importDefault(require("../middleware/authorizationMiddleware"));
const transferrouter = express_1.default.Router();
// get all transaction data
transferrouter.get('/', transfersService_1.default.getAllTransfers);
// post or create new transfer request
transferrouter.post('/new', transfersService_1.default.createTransfer);
//  patch : update transfer status
transferrouter.patch('/:_id', authorizationMiddleware_1.default, transfersService_1.default.approveTransfer);
exports.default = transferrouter;
