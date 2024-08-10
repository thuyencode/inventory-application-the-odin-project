import {
  selectPagesCount,
  selectProductById,
  selectProducts
} from '@/server/db/product'
import type { Product } from '@/shared/types'

const LIMIT = 10

export async function getProducts(): Promise<Product[]> {
  return selectProducts()
}

export async function getProductsPagination(page: number): Promise<Product[]> {
  return selectProducts(LIMIT, page)
}

export async function getProductById(id: number): Promise<Product | undefined> {
  return selectProductById(id)
}

export async function getPagesCount(): Promise<number> {
  return selectPagesCount(LIMIT)
}
