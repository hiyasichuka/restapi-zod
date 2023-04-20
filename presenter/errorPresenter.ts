import { FastifyError } from 'fastify'

type ErrorResponseAttributes = {
  status_code: number
  data: null
  error_message: string
  error_code: string
  timestamp: string
}

export type ErrorResponse = ErrorResponseAttributes

export const errorPresenter = (error: FastifyError): ErrorResponse => {
  const responseObj = {
    status_code: error.statusCode ?? 500,
    data: null,
    error_code: error.code ?? error.name,
    error_message: error.message,
    timestamp: new Date().toISOString(),
  }
  console.error(responseObj)
  return responseObj
}
