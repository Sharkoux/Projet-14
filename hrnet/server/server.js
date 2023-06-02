const db = require('./db.json');
const _ = require('lodash');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3004;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.use(jsonServer.rewriter({
  '/api/users?_search=:term&_sortField=:field&_sortOrder=:order': '/users?_search=:term&_sortField=:field&_sortOrder=:order'
}));

server.use((req, res, next) => {
  if (req.method === 'GET') {
    const queryParams = req.query;
    let users = db.users;

    if (queryParams._search) {
      const searchTerm = queryParams._search.toLowerCase();
      users = users.filter(user =>
        user.firstname.toLowerCase().includes(searchTerm) ||
        user.lastname.toLowerCase().includes(searchTerm) ||
        user.departement.toLowerCase().includes(searchTerm)
        // Ajoutez d'autres champs de recherche ici
      );
    }

    if (queryParams._sortField && queryParams._sortOrder) {
      const sortField = queryParams._sortField;
      const sortOrder = queryParams._sortOrder.toLowerCase();
      users = _.orderBy(users, [sortField], [sortOrder]);
    }

    const slicedUsers = users.slice(0, 30);

    res.setHeader('X-Total-Count', users.length);
    res.setHeader('Access-Control-Expose-Headers', 'X-Total-Count');
    res.json(slicedUsers);
  } else {
    next();
  }
});

server.use(router);
server.listen(port);
