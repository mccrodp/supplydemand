var express = require('express')
var app = express()

var db = require('./db/bookshelf')

app.get('/', function (req, res) {
  res.send('This is working!!!')
})

app.get('/test', function (req, res) {
  res.send('This also working')
})

app.get('/tech/:tech', function (req, res) {
  var tech = byMachineName(req.params.tech)
  console.log(tech)
  res.send('This tech is working: ' + tech)
})

function byMachineName (id) {
  return db.TechModel
    .where('machine_name', id)
    .fetch()
}

var server = app.listen(3000, function () {
  console.log('Server running on http://localhost:' + server.address().port)
})
