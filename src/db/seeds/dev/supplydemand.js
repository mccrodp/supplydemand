
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('supplydemand').del()
    .then(function () {
      // Inserts seed entries
      return knex('supplydemand').insert([
        { tech: 'React', supply: 34, demand: 5 },
        { tech: 'Node', supply: 20, demand: 5 },
        { tech: 'Angular', supply: 2, demand: 3 },
        { tech: 'PHP', supply: 1, demand: 3 }
      ])
    })
}
