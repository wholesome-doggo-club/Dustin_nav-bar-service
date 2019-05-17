const models = require('./models');

module.exports = {
  getDepartments: () => models.Department.find(),
  getCategories: (_id) => models.Department.findById(_id, 'categories')
  // getSubcategories: models.Subcategory.find({})
}