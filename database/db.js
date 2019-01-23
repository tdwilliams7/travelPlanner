const knex = require("knex");
const config = require("./knexfile");
// const env = process.env.NODE_ENV;
// @TODO: set NODE_ENV to change the db config dev, prod, test

module.export = knex(config.development);
