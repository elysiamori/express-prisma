import express from 'express';
import bodyparser from 'body-parser';
import logReq from './src/middleware/middleware.js';
import ProductRoutes from './src/routes/productRoutes.js'
import OrderRoutes from './src/routes/orderRoutes.js'

const app = express();
const port = 3000;

app.use(logReq)
app.use(bodyparser.json())
app.use(express.json())

app.use('/', ProductRoutes)
app.use('/', OrderRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});