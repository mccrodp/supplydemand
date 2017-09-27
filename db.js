var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'supplydemand',
  password: 'supplydemand',
  database: 'supplydemand',
  port: '3307'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The applicants are: ', rows[0].solution)
})

connection.end()
