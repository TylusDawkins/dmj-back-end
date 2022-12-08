const Router = require('express').Router()
const BeadRouter = require('./BeadRouter')
Router.use('/',(req, res) => res.json({ message: 'Welcome to API' }))
Router.use('/beads', BeadRouter)
module.exports = Router
