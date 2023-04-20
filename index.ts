import fastify from 'fastify'
import indexRoute from './index.route'

const server = fastify({
  // logger: {
  //   transport: {
  //     target: 'pino-pretty'
  //   }
  // }
})

server.register(indexRoute, { prefix: '/users' })

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
