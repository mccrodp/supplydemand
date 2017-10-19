var express = require('express')
var app = express()

var DB = require('./db/bookshelf')

app.get('/', function (req, res) {
  res.send('This is working!!!')
})

var server = app.listen(3000, function () {
  console.log('Server running on http://localhost:' + server.address().port)
})
