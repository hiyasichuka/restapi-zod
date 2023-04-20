type SuccessResponseAttributes<T> = {
  status_code: number
  data: T
  error_message: null
  error_code: null
  timestamp: string
}

export type SuccessResponse<T> = SuccessResponseAttributes<T>

export const successPresenter = <T>(
  statusCode: number,
  response: T
): SuccessResponse<T> => {
  const responseObj = {
    status_code: statusCode,
    data: response,
    error_code: null,
    error_message: null,
    timestamp: new Date().toISOString(),
  }
  console.debug(JSON.stringify(responseObj))
  return responseObj
}
