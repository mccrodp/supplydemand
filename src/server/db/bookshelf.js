var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'supplydemand',
    password: 'supplydemand',
    database: 'supplydemand',
    charset: 'utf8',
    port: '3307'
  }
})
var db = require('bookshelf')(knex)

// db.knex.raw('SELECT * FROM tech').then(function (resp) {
//   console.log(resp)
// })

const TechModel = db.Model.extend({
  tableName: 'tech'
})

// TechModel.where('machine_name', 'react').fetch().then(function (tech) {
//   console.log(tech.toJSON())
// }).catch(function (err) {
//   console.error(err)
// })

module.exports = {
  TechModel
}
