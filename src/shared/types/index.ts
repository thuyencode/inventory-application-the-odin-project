import * as v from 'valibot'
import {
  SelectProductsDefaultLimitSchema,
  SelectProductsSchema
} from '../schemas/select-products.schema'
import { SubmittedProductSchema } from '../schemas/submit-product.schema'

export type SelectProductsOptions = v.InferInput<typeof SelectProductsSchema>

export type SelectProductsDefaultLimitOptions = v.InferInput<
  typeof SelectProductsDefaultLimitSchema
>

export type SubmittedProduct = v.InferInput<typeof SubmittedProductSchema>

export interface Category {
  id: number
  created_time: Date
  name: string
}

export type Product = { category_name: string } & SubmittedProduct & Category

export interface ErrorResponse {
  error: {
    statusCode: number
    message: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cause: any
  }
}
