import {
  selectPagesCount,
  selectProductById,
  selectProducts
} from '@/server/db/product.db'
import type { Product, SelectProductsDefaultLimitOptions } from '@/shared/types'

const LIMIT = 10

export async function getProducts(): Promise<Product[]>

export async function getProducts(
  options: SelectProductsDefaultLimitOptions
): Promise<Product[]>

export async function getProducts(
  options?: SelectProductsDefaultLimitOptions
): Promise<Product[]> {
  if (options === undefined) {
    return selectProducts()
  }

  return selectProducts({ ...options, limit: LIMIT })
}

export async function getProductById(id: number): Promise<Product | undefined> {
  return selectProductById(id)
}

export async function getPagesCount(): Promise<number> {
  return selectPagesCount(LIMIT)
}
