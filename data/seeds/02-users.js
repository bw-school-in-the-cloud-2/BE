exports.seed = function(knex) {
  return knex('users').insert([
    { id: 1, email: 'student@email.com', password:'test123', role_id: 1 },
    { id: 2, email: 'admin@email.com', password:'test123', role_id: 2 },
    { id: 3, email: 'volunteer@email.com', password:'test123', role_id: 3 },
    ]);
};