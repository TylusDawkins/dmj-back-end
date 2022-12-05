const {Order} = require('../models')

const GetAllOrders = async (req,res) => {
    try {
        const allOrders = await Order.findAll()
        res.send(allOrders)
    } catch (error){
        throw error
    }
}


const GetOrderDetails = async (req, res) => {
    try {
        const orderDetails = await Order.findbyPk(req.params.order_id)
        res.send(orderDetails)
    } catch (error) {
        throw error
    }

}

const UpdateOrder = async (req, res) => {
    try {
        const orderId = parseInt(req.params.order_id)
        const updatedOrder = await Order.update(req.body, {
            where: { id: orderId},
            returning: true
        })
        res.send(updatedOrder)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllOrders,
    GetOrderDetails,
    UpdateOrder
}