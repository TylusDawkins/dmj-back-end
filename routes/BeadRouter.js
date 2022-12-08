const Router = require('express').Router()
const controller = require('../controllers/BeadController')

// Implement these routes
Router.get('/', controller.GetAllBeads)
Router.get('/:bead_id', controller.GetBeadDetails)
Router.post('/', controller.CreateBead)
Router.put('/:bead_id', controller.UpdateBead)
Router.delete('/:bead_id', controller.DeleteBead)
// Implement these routes
module.exports = Router
