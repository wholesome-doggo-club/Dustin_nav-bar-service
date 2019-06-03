const models = require('./models');

module.exports = {
  getDepartments: () => models.Department.find(),
  getSearchResults: (term) => models.Search.find({ name: { $regex : term }})
}