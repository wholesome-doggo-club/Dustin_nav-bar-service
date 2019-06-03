const router = require('express').Router();
const controller = require('./controller');

router
  .route('/navs')
  .get(controller.getDepartments)

router
  .route('/search/:query')
  .get(controller.getSearchResults)

module.exports = router;