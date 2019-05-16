const models = require('./models');

module.exports = {
  getDepartments: () => models.Department.find()
  // getCategories: models.Category.find({}),
  // getSubcategories: models.Subcategory.find({})
}