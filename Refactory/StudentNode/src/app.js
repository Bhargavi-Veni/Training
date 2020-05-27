const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userModule = require('../src/api/routes/userRoutes');
const userRoutes = require('../src/api/routes/index.js');
class App {
    constructor() {
        this.app = express();
    }
    async setupApp() {
        this.app.use(bodyParser.json())
        this.app.use(cors())
        this.app.get('/', function(req, res){ res.send('Hello World!')})
        this.app.use('/api/user', userRoutes);
        return this.app;
    }
}

const application = new App();
module.exports = application;