const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
  express: server,
  noCache: true
})

server.use(routes)

server.listen(3333)