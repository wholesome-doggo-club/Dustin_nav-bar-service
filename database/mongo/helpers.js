const models = require('./models');

module.exports = {
  getDepartments: () => models.Department.find(),
  getCategories: (_id) => models.Department.findById(_id, 'categories'),
  getSearchResults: (term) => models.Search.find({ name: { $regex : term }})
}