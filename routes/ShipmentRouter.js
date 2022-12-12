const Router = require('express').Router()
const controller = require('../controllers/ShipmentController')

// Implement these routes
Router.get('/',controller.GetAllShipments)
Router.get('/:shipment_id', controller.GetShipmentDetails)
Router.post('/:shipment_id', controller.CreateShipment)
Router.put('/:shipment_id', controller.UpdateShipment)
Router.delete('/:shipment_id', controller.DeleteShipment)
// Implement these routes
module.exports = Router
