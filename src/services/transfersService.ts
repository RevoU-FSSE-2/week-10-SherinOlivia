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
      const newTransfer = await req.db.collection('transfers').insertOne({ user_name, amount, purpose })
      
      res.status(200).json({
        message: 'New Transfer Request Successfully Created',
        data: newTransfer
      })
    } catch (error) {
      res.status(500).json({ error })
    }
  }

  const transferData = { getAllTransfers, createTransfer }
  export default transferData