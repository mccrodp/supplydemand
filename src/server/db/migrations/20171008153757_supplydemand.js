exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('supplydemand', (table) => {
      table.increments()
      table.string('tech').unique().notNullable()
      table.integer('supply').unsigned().notNullable()
      table.integer('demand').unsigned().notNullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('supplydemand')
  ])
}
