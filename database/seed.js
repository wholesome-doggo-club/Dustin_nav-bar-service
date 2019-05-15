const data = require('../data/mockData.json')
const models = require('./models.js')
/*
  Department,
  Category,
  Subcategory
*/

const seed = () => {
  models.Department.create(data)
    .then(() => 'Seeded data to Department document. Please verify that data has been seeded.')
    .catch(err => 'Error seeding data to Department document:')

  models.Category.create(data)
    .then(() => 'Seeded data to Category document. Please verify that data has been seeded.')
    .catch(err => 'Error seeding data to Category document:')

  models.Subcategory.create(data)
    .then(() => 'Seeded data to Category document. Please verify that data has been seeded.')
    .catch(err => 'Error seeding data to Subcategory document:')
}

// invoke seed
seed();