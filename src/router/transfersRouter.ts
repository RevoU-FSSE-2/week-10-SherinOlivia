import express from 'express'
const transferrouter = express.Router()
import transferData from '../services/transfersService';

// get all transaction data
transferrouter.get('/', transferData.getAllTransfers);
// post or create new transfer request
transferrouter.post('/new', transferData.createTransfer);

export default transferrouter