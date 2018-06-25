/**
 * @Desc： controllers
 * @Date: 2018-06-15
 */
const model = require('../models/index.js');
const imp = {};

/**
 * get company
 */
imp.getCompanys = (req, res) => {
  model.getCompanys()
  .then( data => {
    return res.send({ code: 0, data: data });
  })
  .catch(err => {
    return res.send({ code: -1, msg: err.message || 'system error' });
  })
};

module.exports = imp;