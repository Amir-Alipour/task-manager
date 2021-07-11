const jsonServer = require('json-server');
const db = require('./db');
const server = jsonServer.create();
const router = jsonServer.router(db());;
const middlewares = jsonServer.defaults();
import faker from 'faker';

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/members', (req, res, next) => {
    req.body = {
        ...req.body,
        id: faker.datatype.uuid()
    }

    next();
})

server.use(router);
server.listen(5000, () => {
    console.log('json server is running');
});