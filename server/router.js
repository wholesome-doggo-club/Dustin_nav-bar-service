const router = require('express').Router();
const controller = require('./controller');

router
  .route('/navbar')
  .get(controller.getDepartments)

module.exports = router;