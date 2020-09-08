const { Router } = require('express')
const data = require('./data')
const recipes = require('./controllers/recipes')


for (let i = 0; i < data.recipes.length; i++) {
  data.recipes[i].id = i
}

const routes = new Router()

routes.get('/', function(req, res) {
  res.render('home', { recipes: data.recipes })
})

routes.get('/recipes', function(req, res) {
  res.render('recipes', { recipes: data.recipes })
})

routes.get('/about', function(req, res) {
  res.render('about')
})

routes.get('/details', function(req, res) {
  const id = req.query.id

  const recipe = data.recipes.find(recipe => recipe.id == id)

  res.render('details', { recipe })
})

routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes