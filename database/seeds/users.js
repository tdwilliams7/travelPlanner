exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { name: "jean pierre", email: "jean@pierre.com", password: "password" },
        { name: "steve blart", email: "steve@blart.com", password: "password" },
        {
          name: "Troy Williams",
          email: "troy@williams.com",
          password: "password"
        }
      ]);
    });
};
