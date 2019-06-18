const router = require('express').Router();
const controller = require('./controller');

// router
//   .route('/navs')
//   .get(controller.getDepartments)

// router
//   .route('/search/:query')
//   .get(controller.getSearchResults)

router  
  .route('/benchmarkPG').get(controller.benchmarkPG)

//router.route('/benchmarkMongo').get(controller.benchmarkMongo)

module.exports = router;
