import express from 'express'
import OrderController from '../controllers/orderController.js'

const router = express.Router()

router 
    .get('/', OrderController.getAllOrder)
    .get('/:id', OrderController.getOrderById)
    .post('/', OrderController.addOrder)
    .put('/:id', OrderController.updateOrder)
    .delete('/:id', OrderController.deleteOrder)

export default router