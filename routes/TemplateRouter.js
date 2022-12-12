const Router = require('express').Router()
const controller = require('../controllers/TemplateController')

// Implement these routes
Router.get('/:template_id', controller.GetTemplateDetails)
Router.post('/:template_id', controller.CreateTemplate)
Router.put('/:template_id', controller.UpdateTemplate)
Router.delete('/:template_id', controller.DeleteTemplate)
// Implement these routes
module.exports = Router
