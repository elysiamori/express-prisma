import prisma from '../config/prismaConfig.js';

const ProductModel = {
    getAllProduct : () => {
        const orm = prisma.product.findMany()

        return orm
    },
    getProductById : (id) => {
        const orm = prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })
        
        return orm
    },
    addProduct : (body) => {
        const orm = prisma.product.create({
            data: body
        })
        return orm
    },

    updateProduct : (id, body) => {
        const orm = prisma.product.update({
            where: {
                id: Number(id)
            },
            data: body
        })

        return orm
    },

    deleteProduct: (id) => {
        const orm = prisma.product.delete({
            where: {id: Number(id)}
        })

        return orm
    }
}

export default ProductModel