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

module.exports = {
  TechModel
}
