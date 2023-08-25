import {Request, Response, NextFunction} from 'express';
import { ObjectId } from 'mongodb';

const getAllTransfers = async (req:any, res:Response) => {
    try {
      const transfers = await req.db.collection('transfers').find().toArray()
      
      res.status(200).json({
        message: 'Transfer Requests Successfully Retrieved',
        data: transfers
      })
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  const createTransfer = async (req:any, res:Response) => {
    const { user_name, amount, purpose } = req.body
    
    console.log(user_name, amount, purpose, `==== Transfer Request Information`);
    
    try {
      const newTransfer = await req.db.collection('transfers').insertOne({ user_name, amount, purpose, status: "Pending" })
      
      res.status(200).json({
        message: 'New Transfer Request Successfully Created',
        data: newTransfer
      })
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  const updateTransferStatus = async (req:any, res:Response) => { 
    try {
      const _id = new ObjectId(req.params._id)
      const { newStatus }= req.body
      const updateTransReqStat = await req.db.collection('transfers').findOneAndUpdate({ _id, status: "Pending"}, {$set: {status: newStatus} }, {returnOriginal: false});


      if (updateTransReqStat.value === null) {
        console.log("Transfer Request Status Update checking..")
        res.status(404).json({ error: "Transfer Request not found..!" });
        
      } else if (updateTransReqStat.value.status !== "Pending") {
        res.status(400).json({ error: "Transfer Request status is not Pending..! Update Failed..!" });
        console.log("Transfer Request Status Update: 'Pending' checking..")
      } else if (newStatus !== "Approved" || newStatus !== "Rejected" ) {
        res.status(400).json({ error: "Update Transfer Request Status invalid..! 'Approved or Rejected value only!'" });
      } else {
        console.log(`Transfer Request Status Update checking.., ${JSON.stringify(updateTransReqStat)}`)
        res.status(200).json({
          message: "Transfer Request Status Updated Successfully..!",
          data: updateTransReqStat.value,
        })
      }
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: "Transfer Request Status Update Failed..!" });
      
    }
  }


  const transferData = { getAllTransfers, createTransfer, updateTransferStatus }
  export default transferData