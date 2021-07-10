const jsonServer = require('json-server');
const db = require('./db');
const server = jsonServer.create();
const router = jsonServer.router(db());;
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);
server.use(middlewares);


server.use(router);
server.listen(5000, () => {
    console.log('json server is running');
});