
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {sandwich_id: 1, ingredients_id: 2},
        {sandwich_id: 1, ingredients_id: 5},
        {sandwich_id: 1, ingredients_id: 7},
        {sandwich_id: 1, ingredients_id: 10},
        {sandwich_id: 2, ingredients_id: 3},
        {sandwich_id: 2, ingredients_id: 6},
        {sandwich_id: 2, ingredients_id: 9},
        {sandwich_id: 2, ingredients_id: 11},
      ]);
    });
};
