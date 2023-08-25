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
const mongodb_1 = require("mongodb");
const getAllTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transfers = yield req.db.collection('transfers').find().toArray();
        res.status(200).json({
            message: 'Transfer Requests Successfully Retrieved',
            data: transfers
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const createTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, amount, purpose } = req.body;
    console.log(user_name, amount, purpose, `==== Transfer Request Information`);
    try {
        const newTransfer = yield req.db.collection('transfers').insertOne({ user_name, amount, purpose, status: "Pending" });
        res.status(200).json({
            message: 'New Transfer Request Successfully Created',
            data: newTransfer
        });
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const updateTransferStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = new mongodb_1.ObjectId(req.params._id);
        const { newStatus } = req.body;
        const updateTransReqStat = yield req.db.collection('transfers').findOneAndUpdate({ _id, status: "Pending" }, { $set: { status: newStatus } }, { returnOriginal: false });
        if (updateTransReqStat.value === null) {
            console.log("Transfer Request Status Update checking..");
            res.status(404).json({ error: "Transfer Request not found..!" });
        }
        else if (updateTransReqStat.value.status !== "Pending") {
            res.status(400).json({ error: "Transfer Request status is not Pending..! Update Failed..!" });
            console.log("Transfer Request Status Update: 'Pending' checking..");
        }
        else if (newStatus !== "Approved" || newStatus !== "Rejected") {
            res.status(400).json({ error: "Update Transfer Request Status invalid..! 'Approved or Rejected value only!'" });
        }
        else {
            console.log(`Transfer Request Status Update checking.., ${JSON.stringify(updateTransReqStat)}`);
            res.status(200).json({
                message: "Transfer Request Status Updated Successfully..!",
                data: updateTransReqStat.value,
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Transfer Request Status Update Failed..!" });
    }
});
const transferData = { getAllTransfers, createTransfer, updateTransferStatus };
exports.default = transferData;
