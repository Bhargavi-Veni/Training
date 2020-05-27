const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3700;

const taskModule = require('./controller/controller');
app.use(bodyParser.json());
app.use('/task', taskModule);

app.listen(port);
