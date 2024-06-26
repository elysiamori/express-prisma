import OrderModels from "../models/orderModels.js"
import ProductModels from "../models/productModels.js"
import responses from "../res/responses.js";

const OrderController = {
    getAllOrder: async (req, res) => {
        try {
            const order = await OrderModels.getAllOrder()
            const product = await ProductModels.getAllProduct()
            responses.response(200, order, "get all order", res)

        } catch (error) {
            responses.errResponse(500, "INTERNAL SERVER ERROR", "failed get all order", res)
        }
    },

    getOrderById: async (req, res) =>{
        const {id} = req.params

        try {
            const data = await OrderModels.getOrderById(id)
            if(data == null){
                return responses.errResponse(404, "NOT FOUND", "product not found", res)
            }

            responses.response(200, data, `get product by id : ${id}`, res)

        } catch (error) {
            responses.errResponse(500, "INTERNAL SERVER ERROR", "server error", res)
        }
    },

    addOrder: async (req, res) => {
        const {body} = req;
        if(!body.order_by){
            return responses.errResponse(400, "BAD REQUEST", "please input all value", res)
        }

        try {
            await OrderModels.addOrder(body)
            responses.response(201, req.body, "add order sucess", res)

        } catch (error) {
            responses.errResponse(500, "INTERNAL SERVER ERROR", "failed to add order", res)
        }
    },

    updateOrder: async (req, res) => {
        const {id} = req.params
        const order = req.body

        if(!order.order_by){
            return responses.errResponse(400, "BAD REQUEST", "please input all value", res)
        }

        try {
            const existingProduct = await OrderModels.getOrderById(id)
            
            if (!existingProduct || existingProduct.length === 0) {
                return responses.errResponse(404, "NOT FOUND", "order not found", res)
            }

            const updatedOrder = await OrderModels.updateOrder(id, order)
            responses.response(200, updatedOrder, "update order success", res)

        } catch (error) {
            responses.errResponse(500, "INTERNAL SERVER ERROR", "server error", res)  
        }
    },

    deleteOrder: async (req, res) => {
        const {id} = req.params
        try {
            const data = await OrderModels.getOrderById(id)
            if(data == null){
                return responses.errResponse(404, "NOT FOUND", "order not found", res)
            }
            
            await OrderModels.deleteOrder(id)
            responses.response(200, data, "order has been deleted", res)

        } catch (error) {
            responses.errResponse(500, "INTERNAL SERVER ERROR", "server error", res)
        }
    }
}

export default OrderController