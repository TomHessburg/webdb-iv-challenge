
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {name: 'meat', dishes_id: 1},
    {name: 'cheese', dishes_id: 1},
    
    {name: 'apple', dishes_id: 2},
    {name: 'chocolate', dishes_id: 2},

    {name: 'lasagna', dishes_id: 3},
    {name: 'moms', dishes_id: 3},
  ])
};
