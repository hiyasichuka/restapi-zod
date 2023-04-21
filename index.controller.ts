import { RouteHandle } from './types/typeUtils'
import { GetUsersInput } from './index.schema'

export const getUsersHandler: RouteHandle<{
  Querystring: GetUsersInput
  Reply: any
}> = async (request, reply) => {
  console.log('*********************************')
  const str = request.query.tag_ids
  let arr = ''
  if (str) {
    arr = JSON.parse(str)
  }
  console.log(`QueryString:${str}`)
  reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send({ tag_ids: arr })
}
