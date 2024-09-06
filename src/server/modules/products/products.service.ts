import {
  deleteProduct,
  insertNewProduct,
  selectPagesCount,
  selectProductById,
  selectProducts,
  updateAlreadyExistedProduct
} from '@/server/db/product.db'
import type {
  Product,
  SelectProductsDefaultLimitOptions,
  SubmittedProduct
} from '@/shared/types'

const LIMIT = 10

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

export async function addNewProduct(product: SubmittedProduct) {
  return insertNewProduct(product)
}

export async function updateProduct(
  product: SubmittedProduct,
  productId: number
) {
  return updateAlreadyExistedProduct(product, productId)
}

export async function removeProduct(productId: number) {
  return deleteProduct(productId)
}
