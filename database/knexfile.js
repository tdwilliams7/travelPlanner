module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      database: "travel_planner"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./migrations",
      tableName: "knex_migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
