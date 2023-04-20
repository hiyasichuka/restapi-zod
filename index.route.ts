import { FastifyInstance } from 'fastify'
import { GetUsersInputSchema } from './index.schema'
import { getUsersHandler } from './index.controller'

const indexRoutes = async (server: FastifyInstance) => {
  server.get('/', {
    schema: {
      querystring: GetUsersInputSchema
    },
    handler: getUsersHandler
  })
}

export default indexRoutes
