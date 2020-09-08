const data = require('../../data.json')

exports.index = function(req, res) {
  res.render('public/home', { recipes: data.recipes })
}