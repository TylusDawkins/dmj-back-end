const Router = require('express').Router()
const controller = require('../controllers/BeadController')

// Implement these routes
Router.get('/images', controller.GetAllBeads)
Router.get('/:image_name', express.static('assets'))

// Implement these routes
module.exports = Router
