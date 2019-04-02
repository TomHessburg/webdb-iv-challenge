
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    {name: 'sausage'},
    {name: 'mozzerella cheese'},
    
    {name: 'apples'},
    {name: 'bevarian chocolate powder'},

    {name: 'lasagna crust'},
    {name: 'moms secret sauce'},
  ])
};
