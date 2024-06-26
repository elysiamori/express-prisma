import express from 'express'
import product from '../api/productApi.js'
const router = express.Router()

router.use('/product', product)

export default router