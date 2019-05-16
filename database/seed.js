// const category = require('../data/category.json');
const data = require('../data/data.json');
// const subcategory = require('../data/subcategory.json');

const models = require('./models.js');
/*
  Department,
  Category,
  Subcategory
*/

const seed = () => {
  models.Department.create(data)
    .then(() => 'Seeded data to Department document. Please verify that data has been seeded.')
    .catch(() => 'Error seeding data to Department document.')

  // models.Category.create(category)
  //   .then(() => 'Seeded data to Category document. Please verify that data has been seeded.')
  //   .catch(() => 'Error seeding data to Category document.')

  // models.Subcategory.create(subcategory)
  //   .then(() => 'Seeded data to Subcategory document. Please verify that data has been seeded.')
  //   .catch(() => 'Error seeding data to Subcategory document.')
}

// invoke seed via npm script
seed();