const jsonServer = require('json-server');
const db = require('./db');
const server = jsonServer.create();
const router = jsonServer.router(db());;
const middlewares = jsonServer.defaults();
const faker = require('faker');

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/users', (req, res, next) => {
    req.body = {
        ...req.body,
        id: faker.datatype.uuid()
    }

    next();
});

server.post('/tasks', (req, res, next) => {
    req.body = {
        ...req.body,
        id: faker.datatype.uuid(),
        time: Date.now(),
        status: "To Do"
    };

    next();
});

server.post('/bookmarks', (req, res, next) => {
    req.body = {
        ...req.body,
        id: faker.datatype.uuid(),
        time: Date.now(),
    };

    next();
})

server.use(router);
server.listen(5000, () => {
    console.log('json server is running');
});