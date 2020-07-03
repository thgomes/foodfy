const express = require('express')
const nunjucks = require('nunjucks')

const recipes = require('./data')

for (let i = 0; i < recipes.length; i++) {
  recipes[i].id = i
}

server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  noCache: true
})

server.get('/', function(req, res) {
  res.render('home', { recipes })
})

server.get('/recipes', function(req, res) {
  res.render('recipes', { recipes })
})

server.get('/about', function(req, res) {
  res.render('about')
})

server.get('/details', function(req, res) {
  const id = req.query.id

  const recipe = recipes.find(recipe => recipe.id == id)

  res.render('details', { recipe })
})


server.listen(3333)