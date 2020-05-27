const indexApp = require('./app');
const express = require('express');

const port = 3400;

class Server {
    constructor() {
        this.expressApp = express();
    }
    async runserver() {
        this.expressApp = await indexApp.setupApp();
        this.expressApp.listen(port, () => console.log(`Example app listening on port ${port}!`))
    }
}
const server = new Server();
server.runserver();