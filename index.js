const express = require('express')

const server = express();
server.use(express.json());

const Recipes = require('./data/models/recipes-model.js');

// const knex = require('knex')
// const knexConfig = require('./knexfile.js');
// const localDb = knex(knexConfig.development);


server.get('/', (req,res) => {
    res.send('server working')
})

server.get('/api/dishes', (req,res) => {
  Recipes.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})


server.get('/api/dishes/:id', (req,res) => {
  Recipes.getDish(req.params.id)
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})



server.post('/api/dishes', (req,res) => {
  console.dir(req.body.name);
  Recipes.addDish({name: req.body.name})
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err))
})





server.get('/api/recipes', (req,res) => {

  Recipes.getRecipes(req.body)
    .then(recipes => res.status(201).json(recipes))
    .catch(err => res.status(500).json(err))
})

server.post('/api/recipes', (req,res) => {

  Recipes.addRecipe(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err))
})



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
