const Router = require('express').Router()
const controller = require('../controllers/PendantController')

// Implement these routes
Router.get('/', controller.GetAllPendants)
Router.get('/:pendant_id', controller.GetPendantDetails)
Router.post('/', controller.CreatePendant)
Router.put('/:pendant_id', controller.UpdatePendant)
Router.delete('/:pendant_id', controller.DeletePendant)
// Implement these routes
module.exports = Router
