import prisma from '../config/prismaConfig.js';

const OrderModels = {
    getAllOrder: () => {
        const orm = prisma.order.findMany({
            include: {product: true}
        })

        return orm
    },

    getOrderById: (id) => {
        const orm = prisma.order.findUnique({
            where: {
                id: Number(id)
            },
            include: {product: true},
        })

        return orm
    },

    addOrder: (body) => {
        const orm = prisma.order.create({
            data: body
        })

        return orm
    },

    updateOrder: (id, body) => {
        const orm = prisma.order.update({
            where: {
                id: Number(id)
            },
            data: body
        })

        return orm
    },

    deleteOrder: (id) => {
        const orm = prisma.order.delete({
            where: {
                id: Number(id)
            }
        })

        return orm
    }
}

export default OrderModels