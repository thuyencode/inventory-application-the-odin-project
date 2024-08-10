import { Category, Product } from '@/shared/types'

export interface ProductsResponse {
  products: Product[]
  pages_count: number
  next?: string
}

export interface CategoriesResponse {
  categories: Category[]
}
