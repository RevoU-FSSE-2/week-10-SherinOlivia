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
Object.defineProperty(exports, "__esModule", { value: true });
const getAllTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transfers = yield req.db.collection('transfers').find().toArray();
        res.status(200).json({
            message: 'Transactions data successfully retrieved',
            data: transfers
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const createTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, amount, purpose } = req.body;
    console.log(user_name, amount, purpose, `Transfer Request Information`);
    try {
        const newTransfer = yield req.db.collection('transfers').insertOne({ user_name, amount, purpose });
        res.status(200).json({
            message: 'New Transfer Request Successfully Created',
            data: newTransfer
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const transferData = { getAllTransfers, createTransfer };
exports.default = transferData;
