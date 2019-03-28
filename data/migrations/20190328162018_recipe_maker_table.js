
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments();
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
    })
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl
            .string('name', 128)
            .notNullable()
            .unique();
        tbl
            .integer('dishes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('dishes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl
            .string('name', 128)
            .notNullable()
            .unique()
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl
            .integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl
            .float('ammount', 8)
            .notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('dishes');
};
 