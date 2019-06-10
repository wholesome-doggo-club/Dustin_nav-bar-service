const items = require('../data/items.json');
const keywords = require('../data/keywords.json');

const mongoose = require('mongoose')
const models = require('./models.js');
/*
  Department,
  Keyword
*/

/* Seeds contents to Nav-bar as well as contents for Products */
const seed = () => {
  models.Department.create(items)
    .then(() => mongoose.connection.close())
    .catch(() => console.log('Error seeding items to Department document.'))

  models.Keyword.create(keywords)
    .then(()  => mongoose.connection.close())
    .then(() => console.log('Seeding done.'))
    .catch(() => console.log('Error seeding keywords to Keyword document.'))

}

// invoke seed via npm script
seed();