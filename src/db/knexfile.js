// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'supplydemand',
      password: 'supplydemand',
      database: 'supplydemand',
      charset: 'utf8',
      port: '3307'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}
