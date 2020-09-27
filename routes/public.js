const { Router } = require('express')
const about = require('../controllers/public/about')
const home = require('../controllers/public/home')
const recipes = require('../controllers/public/recipes')

const routes = new Router()

routes.get('/', home.index)
routes.get('/recipes', recipes.index)
routes.get('/about', about.show)
routes.get('/details/:id', recipes.show)

module.exports = routes