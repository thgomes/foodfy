const fs = require('fs')
const data = require('../../data.json')

for (let i = 0; i < data.recipes.length; i++) {
  data.recipes[i].id = i
}

exports.index = function(req, res) {
  return res.render('admin/recipes', { recipes: data.recipes })
}

exports.create = function(req, res) {
  return res.render('admin/create', { recipes: data.recipes })
}

exports.show = function(req, res) {
  const { id } = req.params

  const recipe = data.recipes.find(recipe => recipe.id == id)

  if (!recipe) {
    return res.send('Recipe not found!')
  }

  return res.render('admin/details', { recipe })
}

exports.edit = function(req, res) {
  const { id } = req.params

  const recipe = data.recipes.find(recipe => recipe.id == id)

  if (!recipe) {
    return res.send('Recipe not found')
  }

  return res.render('admin/edit', { recipes: data.recipes })
}



exports.post = function(req, res) {
  console.log(req.body)
  const keys = Object.keys(req.body)


  for (key of keys) {
    if (req.body[key] == '') {
      return res.send('Please, fill all fields!')
    }
  }

  let { image, title, author, ingredients, preparation, information } = req.body

  ingredients = ingredients.split(',').map(ingredient => {
    return ingredient.trim()
  })

  preparation = preparation.split(',').map(step => {
    return step.trim()
  })

  data.recipes.push({
    image,
    title,
    author,
    ingredients,
    preparation,
    information
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) {
      return res.send('Write file error')
    }

    return res.redirect('/admin/recipes')
  })
}

exports.put = function(req, res) {

}

// exports.delete = function(req, res) {

// }