import {Request, Response, NextFunction} from 'express';

const getAllTransfers = async (req:any, res:Response) => {
    try {
      const transfers = await req.db.collection('transfers').find().toArray()
      
      res.status(200).json({
        message: 'Transactions data successfully retrieved',
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

  const approveTransfer = async (req:any, res:Response) => { 
    try {
      // const currentTransferReq = await req.db.collection('transfers').findOne({ _id : req.params._id});

      // if (!currentTransferReq) {
      //   res.status(404).json({ error: "Transfer Request not found..!" });
      // } else if (currentTransferReq.status !== "Pending") {
      //   res.status(400).json({ error: "Transfer Request status is not Pending..! Update Failed..!" });
      // }

      const updateTransReqStat = await req.db.collection('transfer').findOneAndUpdate({ _id : req.params._id, status: "Pending"}, {$set: {status: "Approved" }}, {returnOriginal: false})
      
      if (!updateTransReqStat) {
        res.status(404).json({ error: "Transfer Request not found..!" });
      } else if (updateTransReqStat.value.status !== "Pending") {
        res.status(400).json({ error: "Transfer Request status is not Pending..! Update Failed..!" });
      } else {
        res.status(200).json({
          message: "Transfer Request Status Updated Successfully..!",
          data: updateTransReqStat.value
        })
      }
    } catch (error) {
      res.status(500).json({ error: "Transfer Request Status Update Failed..!" });
    }
  }


  const transferData = { getAllTransfers, createTransfer, approveTransfer }
  export default transferData