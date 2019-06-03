const helper = require('../database/helpers')

// connect server to DB+models
require('../database/models')

module.exports = {
  getDepartments: (req, res) => {
    helper.getDepartments()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  },

  getSearchResults: (req, res) => {
    const { query } = req.params

    helper.getSearchResults(query)
      .limit(5)
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err))
  }
}
