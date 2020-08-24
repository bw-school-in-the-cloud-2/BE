
exports.up = function(knex) {
  return knex.schema.createTable('roles', table =>{
    table.increments('id');
    table.string('role').notNullable().unique()
  }).createTable('users', table =>{
    table.increments('id');
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.integer('role_id')
      .unsigned()
      .notNullable()
      .references('roles.id');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
    .dropTableIfExists('roles')
};
