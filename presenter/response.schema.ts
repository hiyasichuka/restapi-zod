import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'

export const successResponseBuilder = <T>(successData: z.ZodType<T>) =>
  z.object({
    status_code: z.number(),
    data: successData,
    error_code: z.null(),
    error_message: z.null(),
    timestamp: z.string(),
  })

export const successResponseJsonSchemaBuilder = <T>(schema: z.ZodType<T>) =>
  zodToJsonSchema(successResponseBuilder(schema), {
    name: 'successResponse',
  }).definitions.successResponse

export const successNullResponse = successResponseJsonSchemaBuilder(z.null())
