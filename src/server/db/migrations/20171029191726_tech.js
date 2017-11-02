exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tech', (table) => {
      table.increments()
      table.string('machine_name').unique().notNullable()
      table.string('display_name').notNullable()
      table.integer('supply').unsigned().notNullable()
      table.integer('demand').unsigned().notNullable()
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('tech')
  ])
}
