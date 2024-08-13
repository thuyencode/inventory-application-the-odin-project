import { ProductSearchSchema } from '@/client/modules/products/schemas/product-search.schema'
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

export type ProductSearch = v.InferInput<typeof ProductSearchSchema>

export type ProductComponentProps = {
  products: Product[]
} & Pick<ProductSearch, 'display'>
