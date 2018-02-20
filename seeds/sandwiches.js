
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, user_id: 1}
        {id: 2, user_id: 1}
        {id: 3, user_id: 1}
        {id: 4, user_id: 2}
        {id: 5, user_id: 2}
        {id: 6, user_id: 2} 
      ]);
    });
};
