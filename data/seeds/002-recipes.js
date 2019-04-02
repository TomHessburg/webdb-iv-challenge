
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {name: 'meat', dishes_id: 1, instructions: 'cook the damn thing'},
    {name: 'cheese', dishes_id: 1, instructions: 'cook the damn thing'},
    
    {name: 'apple', dishes_id: 2, instructions: 'cook the damn thing'},
    {name: 'chocolate', dishes_id: 2, instructions: 'cook the damn thing'},

    {name: 'lasagna', dishes_id: 3, instructions: 'cook the damn thing'},
    {name: 'moms', dishes_id: 3, instructions: 'cook the damn thing'},
  ])
};
