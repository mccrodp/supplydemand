var express = require('express')
var app = express()

var db = require('./db/bookshelf')

app.get('/', function (req, res) {
  res.send('This is working!!!')
})

app.get('/tech/:tech', function (req, res) {
  db.TechModel.where('machine_name', req.params.tech).fetch().then(function (tech) {
    res.send('<h1>' + tech.get('display_name') + '</h1>' +
    '<br> <strong>Supply:</strong> ' + tech.get('supply') +
    '<br> <strong>Demand:</strong> ' + tech.get('demand'))
  }).catch(function (err) {
    console.error(err)
    res.end()
  })
})

var server = app.listen(3000, function () {
  console.log('Server running on http://localhost:' + server.address().port)
})
