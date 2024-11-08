const jsonServer = require('json-server')
const cors = require('cors'); // Importando o middleware CORS

const server = jsonServer.create()

// Permitir requisições de qualquer origem ou de um domínio específico
server.use(cors({
  origin: 'https://to-do-list-task-processo-seletivo-cod511qja.vercel.app', // Adicione o URL do seu front-end
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Os métodos permitidos
  allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
}));

const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
  '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
