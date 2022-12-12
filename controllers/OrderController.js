const {Order} = require('../models')

const CreateOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body)
        res.send(order)
    } catch (error) {
        throw error
    }
}

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

const DeleteOrder = async (req, res) => {
    try {
      let orderId = parseInt(req.params.order_id)
      await Order.destroy({where: { id: orderId}})
      res.send({ message: `Deleted Comment with an id of ${orderId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateOrder,
    GetAllOrders,
    GetOrderDetails,
    UpdateOrder,
    DeleteOrder
}