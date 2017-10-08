
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function () {
      // Inserts seed entries
      return knex('test').insert([
        { name: 'justMe', createdAt: knex.fn.now() },
        { name: 'meAgain' },
        { name: 'somebody', createdAt: new Date(2009, 0, 31) }
      ])
    })
}
