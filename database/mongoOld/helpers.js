const models = require('./models');

module.exports = {
  getDepartments: () => models.Department.find(),
  getSearchResults: (query) => models.Keyword.find({ keyword : { $regex : query } })
}