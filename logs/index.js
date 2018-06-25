/**
 * @Desc： logs
 * @Date： 2018-06-25
 */

const log4js = require('log4js');
const log4jsCfg = require('./log4js.json');

log4js.configure(log4jsCfg);

const logger = log4js.getLogger('default');

console.log = logger.info.bind(logger);
console.error = logger.error.bind(logger);

console.log('test log4js info level');
console.error('test log4js error level');
