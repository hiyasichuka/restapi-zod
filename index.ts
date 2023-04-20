import fastify from 'fastify'
interface IQuerystring {
  username: string
  password: string
}
interface IHeaders {
  'h-Custom': string
}

const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

server.get('/', async function () {
  return { message: 'Hello world.' }
})

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.get<{
  Querystring: IQuerystring
  Headers: IHeaders
}>('/auth', async (request, reply) => {
  const { username, password } = request.query
  const customerHeader = request.headers['h-Custom']
  // do something with request data

  return `logged in!`
})

async function main() {
  await server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
  })
}