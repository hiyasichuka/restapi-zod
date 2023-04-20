import { z } from 'zod'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { successResponseJsonSchemaBuilder } from './presenter/response.schema'

// GET /users
export const getUsersObject = z.object({
  user_id: z.string().uuid(),
  nickname: z.string(),
  user_image: z.object({
    image_url: z.string().url(),
    thumbnail_url: z.string().url()
  }),
  age: z.number().nullable(),
  gender: z.number().min(-1).max(2).nullable(),
  tag_ids: z.array(z.number()),
  self_introduction: z.string().nullable(),
  child_list: z.array(
    z.object({
      gender: z.number().min(-1).max(2),
      birthdate: z
        .string()
        .regex(/\d{4}-\d{2}-\d{2}/)
        .describe('YYYY-MM-DD')
        .nullable()
    })
  ),
  prefecture_id: z.number()
})

export const getUsersInputSchema = z.object({
  page: z.number().default(1).optional(),
  limit: z.number().min(0).max(100).default(10).optional(),
  search_key: z.string().optional(),
  tag_ids: z.array(z.number()).optional()
})

export type GetUsersInput = z.infer<typeof getUsersInputSchema>
export const GetUsersInputSchema = zodToJsonSchema(getUsersInputSchema, {
  name: 'GetUsersInputSchema'
}).definitions.GetUsersInputSchema
