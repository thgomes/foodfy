const express = require('express')
const admin = require('./admin')
const public = require('./public')

const routes = express.Router()

routes.use(admin)
routes.use(public)

module.exports = routes