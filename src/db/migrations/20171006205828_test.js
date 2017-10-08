exports.up = function (knex, Promise) {
  return Promise.all([

    knex.schema.createTable('test', (table) => {
      table.increments()
      table.string('name').unique().notNullable()
      table.timestamp('createdAt').defaultTo(knex.fn.now())
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('test')
  ])
}
