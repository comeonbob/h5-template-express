/**
 * @Desc： routes
 * @Date: 2018-06-15
 */
const router = require('express').Router();
const ctr = require('../controllers');

router.route('/company').get(ctr.getCompanys);

module.exports = router;