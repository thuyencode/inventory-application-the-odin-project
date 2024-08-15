import * as v from 'valibot'
import {
  SelectProductsDefaultLimitSchema,
  SelectProductsSchema
} from '../schemas/select-products.schema'

export type SelectProductsOptions = v.InferInput<typeof SelectProductsSchema>

export type SelectProductsDefaultLimitOptions = v.InferInput<
  typeof SelectProductsDefaultLimitSchema
>

export interface Category {
  id: number
  created_time: Date
  name: string
}

export type Product = {
  description?: string
  price: number
  stock: number
  brand?: string
  sku: string
  weight: number
  category_id: number
  image_url: string
  category_name: string
} & Category
