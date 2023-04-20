import { RouteHandle } from './types/typeUtils'
import { GetUsersInput } from './index.schema'

export const getUsersHandler: RouteHandle<{
  Querystring: GetUsersInput
  Reply: any
}> = async (request, reply) => {
  console.log('*********************************')
  console.log(`QueryString:${request.query.tag_ids}`)
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ tag_ids: request.query.tag_ids })
}
