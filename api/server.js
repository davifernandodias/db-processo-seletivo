const jsonServer = require('json-server')
const cors = require('cors'); // Importando o middleware CORS

const server = jsonServer.create()

server.use(cors({
  origin: '*', // Permite qualquer origem durante o desenvolvimento
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
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
