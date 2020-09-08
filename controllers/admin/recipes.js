const data = require('../../data.json')

for (let i = 0; i < data.recipes.length; i++) {
  data.recipes[i].id = i
}

exports.index = function(req, res) {
  res.render('admin/recipes', { recipes: data.recipes })
}

exports.create = function(req, res) {
  res.render('admin/create', { recipes: data.recipes })
}

exports.show = function(req, res) {
  const id = req.params.id

  const recipe = data.recipes.find(recipe => recipe.id == id)

  res.render('admin/details', { recipe })
}

exports.edit = function(req, res) {
  res.render('admin/edit', { recipes: data.recipes })

}



// exports.post = function(req, res) {

// }

// exports.put = function(req, res) {

// }

// exports.delete = function(req, res) {

// }