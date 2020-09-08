const data = require('../../data.json')

for (let i = 0; i < data.recipes.length; i++) {
  data.recipes[i].id = i
}

exports.index = function(req, res) {
  res.render('public/recipes', { recipes: data.recipes })
}

exports.show = function(req, res) {
  const id = req.query.id

  const recipe = data.recipes.find(recipe => recipe.id == id)

  res.render('public/details', { recipe })
}

