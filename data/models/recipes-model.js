const db = require('../dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    addRecipe,
    getRecipes,
    getDish
}

function getDishes() {
    return db('dishes');
}

function addDish(dish) {
    return db('dishes')
        .insert(dish)
}


function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
}

function getRecipes(){
    return db('recipes');
}


function getDish(id){
    return db('dishes')
        .where({id: id});
}


// function getDish() {
//     return db('dishes');
// }

// function getRecipes() {
//     return db('dishes');
// }

// function addRecipe() {
//     return db('dishes');
// }