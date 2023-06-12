const db = require('./db.json');


const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004;

server.use(middlewares);



server.get('/get/user', (req, res) => {
  res.jsonp(req.query)
});



server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  // Continue to JSON Server router
  next()
})




server.use(router);
server.listen(port);



server.use(jsonServer.rewriter({
  '/api/users': '/users'
}));