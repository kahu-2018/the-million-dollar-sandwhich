
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, type: 'bread', name: 'Ciabatta', image_link: 'rowValue1'},
        {id: 2, type: 'bread', name: 'Rye', image_link: 'rowValue1'},
        {id: 3, type: 'bread', name: 'Sourdough', image_link: 'rowValue1'},
        {id: 4, type: 'filling', name: 'Tofu', image_link: 'rowValue1'},
        {id: 5, type: 'filling', name: 'Chicken', image_link: 'rowValue1'},
        {id: 6, type: 'filling', name: 'Beef', image_link: 'rowValue1'},
        {id: 7, type: 'cheese', name: 'Swiss Cheese', image_link: 'rowValue1'},
        {id: 8, type: 'cheese', name: 'Mozzarella', image_link: 'rowValue1'},
        {id: 9, type: 'cheese', name: 'Vegan Cheese', image_link: 'rowValue1'},
        {id: 10, type: 'veg', name: 'Tomato', image_link: 'rowValue1'},
        {id: 11, type: 'veg', name: 'Lettuce', image_link: 'rowValue1'},
        {id: 12, type: 'veg', name: 'Pickles', image_link: 'rowValue1'},
        {id: 13, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 14, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 15, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 16, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 17, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 18, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 19, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 20, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 21, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 22, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 23, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
        {id: 24, type: 'bread', name: 'rowValue1', image_link: 'rowValue1'},
      ]);
    });
};
