const router = require('express').Router();
const controller = require('./controller');

router
  .route('/navbar')
  .get(controller.getDepartments)

router
  .route('/navbar/:_id')
  .get(controller.getCategories)

module.exports = router;