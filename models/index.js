/**
 * @Desc： models
 * @Date: 2018-06-15
 */
const dac = require('./dac');
const imp = {};

/**
 * get company
 */
imp.getCompanys = (req, res) => {
  const mockData = [
    {
      id: 1,
      name: 'ali',
      address: 'HZ'
    },
    {
      id: 2,
      name: 'tencent',
      address: 'SZ'
    },
    {
      id: 3,
      name: 'baidu',
      address: 'SZ'
    }
  ];
  // mockData also can from http , db or file.
  return Promise.resolve(mockData);

  // let sql = `select *from gs_company;`;
  // return dac.do(sql);
};

module.exports = imp;