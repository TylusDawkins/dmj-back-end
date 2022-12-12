const Router = require('express').Router()
const controller = require('../controllers/OrderController')

// Implement these routes
Router.get('/', controller.GetAllOrders)
Router.get('/:order_id', controller.GetOrderDetails)
Router.post('/', controller.CreateOrder)
Router.put('/:order_id', controller.UpdateOrder)
Router.delete('/:order_id', controller.DeleteOrder)
// Implement these routes
module.exports = Router
