// const helper = require('../database/helpers')
const requestPG = require('../database/postgre/benchmarkNoORM.js');
// const requestPG = require('../database/postgre/benchmark.js');
const requestMongo = require('../database/mongo/benchmark.js')

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
  benchmarkPG: (req, res) => {
    // res.send(query);
    requestPG((data) => res.send(data))
  },
  benchmarkMongo: (req, res) => {
    requestMongo((data) => res.send(data))
  }
}
