const router = require('express').Router();
const controller = require('./controller');

router
  .route('/navbar')
  .get(controller.getDepartments)

router
  .route('/navbar/:_id')
  .get(controller.getCategories)

router
  .route('/search/:term')
  .get(controller.getSearchResults)

module.exports = router;