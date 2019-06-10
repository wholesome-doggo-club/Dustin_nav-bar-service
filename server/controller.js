// const helper = require('../database/helpers')
const benchmarkFunction = require('../database/postgre/benchmark.js');

// connect server to DB+models
require('../database/postgre/models.js')

module.exports = {
  // getDepartments: (req, res) => {
  //   helper.getDepartments()
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },

  // getSearchResults: (req, res) => {
  //   const { query } = req.params

  //   helper.getSearchResults(query)
  //     .limit(5)
  //     .then(data => res.status(200).send(data))
  //     .catch(err => res.status(404).send(err))
  // },
  benchmark: (req, res) => {
    // res.send(query);
    benchmarkFunction((data) => res.send(data))
  }
}
