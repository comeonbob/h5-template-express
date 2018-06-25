/**
 * @Desc: the entry of the app
 * @Date: 2018-06-25
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const baseConfig = require('./config/base.js');
const routes = require('./routes/index.js');
const path = require('path')
let app = express();

// http body config
app.use(bodyParser.text(baseConfig.bodyParser));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// cors config
app.options('*', cors(baseConfig.corsOptions));
app.all('*', cors(baseConfig.corsOptions));

// set routes
app.use('/v1', routes);

// static file server
app.use('/static', express.static(path.join(__dirname, 'public')));

// start a server
app.listen(baseConfig.port, function() {
    console.log(`app is listening on ${baseConfig.port}`);
    console.log(`demo api: http://localhost:${baseConfig.port}/v1/company`);
    console.log(`demo image: http://localhost:${baseConfig.port}/static/images/test.jpg`);
});

// error handle
app.use((err, req, res, next) => {
  console.error(err.message);
  return res.status(200).send({ code: -1, msg: err.message || 'system error' });
});

process.on('uncaughtException', err => {
    console.log(err);
});

require('./logs/index.js');