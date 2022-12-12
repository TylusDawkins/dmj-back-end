const Router = require('express').Router()
const controller = require('../controllers/UserController')

// Implement these routes
Router.get('/:user_id', controller.GetUser)
Router.post('/:user_id', controller.CreateUser)
Router.put('/:user_id', controller.UpdateUser)
Router.delete('/:user_id', controller.DeleteUser)
// Implement these routes
module.exports = Router
