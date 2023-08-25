import express from 'express'
import transferData from '../services/transfersService';
import authorMiddleware from '../middleware/authorizationMiddleware';

const transferrouter = express.Router()

// get all transaction data
transferrouter.get('/', transferData.getAllTransfers);
// post or create new transfer request
transferrouter.post('/new', transferData.createTransfer);
//  patch : update transfer status
transferrouter.patch('/:_id', authorMiddleware, transferData.updateTransferStatus)

export default transferrouter