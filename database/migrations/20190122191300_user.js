const uuid = require("uuid/v4");
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.string("id").default(uuid());
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255).notNullable();
    table.timestamp("created_at").default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
