/**
 * @Desc: base config
 * @Date: 2018-06-25
 */
const base = {
  // server port
  port: 9000,
  // cors config
  corsOptions: {
    origin: [],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    preflightContinue: false,
    credentials: true
  },
  // http body config
  bodyParser: {
    limit: '2mb',
    type: 'text/*'
  },
  // database connect info
  dbInfo: {
    dbHost: '',
    dbUser: '',
    dbPort: '',
    dbPWD: '',
    dbName: ''
  }
};

module.exports = base;