const items = require('../data/items.json');
const search = require('../data/search.json');

const mongoose = require('mongoose')
const models = require('./models.js');
/*
  Department,
  Search
*/

/* Seeds contents to Nav-bar as well as contents for Search results */
const seed = () => {
  models.Department.create(items)
    .then(() => mongoose.connection.close())
    .catch(() => console.log('Error seeding items to Department document.'))

  models.Search.create(search)
    .then(()  => mongoose.connection.close())
    .then(() => console.log('Seeding done.'))
    .catch(() => console.log('Error seeding search results to Search document.'))

}

// invoke seed via npm script
seed();