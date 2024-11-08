const jsonServer = require('json-server');
const cors = require('cors');  // Importando o pacote CORS

const server = jsonServer.create();

// Usando o middleware CORS para permitir requisições do frontend Angular
server.use(cors({
  origin: 'https://to-do-list-task-processo-seletivo.vercel.app', // Substitua com o URL do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
}));


// Configuração do json-server
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});

module.exports = server;
