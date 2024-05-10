const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/config');
const PORT = process.env.PORT;
const router = require('./routes/router');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server is listening  on ${PORT}`);
});

module.exports = app;
