import ProductModel from '../models/productModels.js';

const ProductController = {

    getAllProduct: async (req, res) => { 
        try {
            const data = await ProductModel.getAllProduct()

            res.status(200).json({
                data: data,
                message : "get all product success"
            })
        } catch (error) {
            res.status(500).json({
                error: "failed get all product",
                message: error.message,
                details: error
            })
        }
    },
    getProductById: async (req, res) => {
        const {id} = req.params
        try {
            const data = await ProductModel.getProductById(id)

            if(data == null){
                res.status(404).json({
                    error : "product not found",
                    meesage: error.message
                })
            }

            res.status(200).json({
                data: data,
                message : `get product by id : ${id} `
            })
        } catch (error) {
            res.status(404).json({
                error : "product not found",
            })
        }
    },
    addProduct : async (req, res) => {
        const {body} = req;
        if(!body.product_name || !body.type_product){
            return res.status(400).json({
                message: "please input all value"
            })
        }

        try {
            await ProductModel.addProduct(body)
            res.status(201).json({
                data: req.body,
                message : "add product success"
            })
        } catch (error) {
            res.status(400).json({
                error: "failed add user",
                message: error.message,
                details: error
            })
        }
    },

    updateProduct : async (req, res) => {
        const id = req.params.id
        const product = req.body;

        if (!product.product_name || !product.type_product) {
            return res.status(400).json({
                message: "Please input all values",
            });
        }

        try {
            const existingProduct = await ProductModel.getProductById(id)
            
            if (!existingProduct || existingProduct.length === 0) {
                return res.status(404).json({
                    error: "Not Found",
                    message: "product not found",
                });
            }

            const updatedProduct = await ProductModel.updateProduct(id, product);
            res.status(200).json({
                data: updatedProduct,
                message: "update product success",
            });

        } catch (error) {
            res.status(500).json({
                error: "server error",
                message: error.message,
                details: error
            });
        }
    },

    deleteProduct : async (req, res) => {
        const {id} = req.params
        try {
            const data = await ProductModel.getProductById(id)
            if (data == null) {
                return res.status(404).json({
                    error: "not found",
                    message: "product not found"
                });
            }

            await ProductModel.deleteProduct(id)
            res.status(200).json({
                message : "product has been deleted"
            })
         } catch (error) {
            return res.status(404).json({
                error: "not found",
                message: "product not found"
            });
        }
    }
}

export default ProductController

