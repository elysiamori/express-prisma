import express from 'express'
import ProductController from '../controllers/productController.js'

const router = express.Router()

router
    .get('/', ProductController.getAllProduct)
    .get('/:id', ProductController.getProductById)
    .post('/', ProductController.addProduct)
    .put('/:id', ProductController.updateProduct)
    .delete('/:id', ProductController.deleteProduct)

export default router