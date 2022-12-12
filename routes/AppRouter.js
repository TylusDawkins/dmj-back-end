const Router = require('express').Router()
const BeadRouter = require('./BeadRouter')
const PendantRouter = require('./PendantRouter')
const UserRouter = require('./UserRouter')
const OrderRouter = require('./OrderRouter')
const ShipmentRouter = require('./ShipmentRouter')
const { TimeoutError } = require('sequelize')


// Router.use('/',(req, res) => res.json({ message: 'Welcome to API' }))
Router.use('/beads', BeadRouter)
Router.use('/pendants', PendantRouter)
Router.use('/users',UserRouter)
Router.use('/orders',OrderRouter)
Router.use('/shipments',ShipmentRouter)
// Router.use('/templates',TemplateRouter)


module.exports = Router
