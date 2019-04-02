
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    {recipe_id: 1, ingredient_id: 1, ammount: 5},
    {recipe_id: 1, ingredient_id: 2, ammount: 2},

    {recipe_id: 2, ingredient_id: 2, ammount: 3},

    {recipe_id: 3, ingredient_id: 3, ammount: 6},

    {recipe_id: 4, ingredient_id: 3, ammount: 1},
    {recipe_id: 4, ingredient_id: 4, ammount: 8},

    {recipe_id: 5, ingredient_id: 5, ammount: 3},

    {recipe_id: 6, ingredient_id: 5, ammount: 2},
    {recipe_id: 6, ingredient_id: 6, ammount: 1},
  ]);
};
