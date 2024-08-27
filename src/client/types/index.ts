import { ProductsSearchSchema } from '@/client/schemas/products-search.schema'
import { Category, Product } from '@/shared/types'
import * as v from 'valibot'

export interface ProductsResponse {
  products: Product[]
  pages_count: number
  next?: string
}

export interface CategoriesResponse {
  categories: Category[]
}

export type ProductsSearch = v.InferInput<typeof ProductsSearchSchema>

export type ProductsPageComponentProps = {
  products: Product[]
} & Pick<ProductsSearch, 'display'>
