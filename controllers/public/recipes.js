const data = require('../../data.json')

exports.index = function(req, res) {
  res.render('public/recipes', { recipes: data.recipes })
}

exports.show = function(req, res) {
  const { id } = req.params

  const recipe = data.recipes.find(recipe => recipe.id == id)

  res.render('public/details', { recipe })
}

