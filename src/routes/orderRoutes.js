import express from 'express'

import order from '../api/orderApi.js'

const router = express.Router()


router.use('/order', order)


export default router