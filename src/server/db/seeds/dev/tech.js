
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tech').del()
    .then(function () {
      // Inserts seed entries
      return knex('tech').insert([
        { machine_name: 'react', display_name: 'React', supply: 34, demand: 5 },
        { machine_name: 'node', display_name: 'Node', supply: 20, demand: 5 },
        { machine_name: 'angular', display_name: 'Angular', supply: 2, demand: 3 },
        { machine_name: 'php', display_name: 'PHP', supply: 1, demand: 3 }
      ])
    })
}
