import { Product } from '@/shared/types'
import { ProductsResponse } from '../types'
import baseApi from './baseApi'

const productsApi = baseApi.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/products`
}))

/**
 * Get response from `/api/products`.
 *
 * @export
 * @async
 * @param {?AbortSignal} [signal]
 * @returns {Promise<Omit<ProductsResponse, 'next'>>}
 */
export async function getProducts(signal?: AbortSignal) {
  return await productsApi
    .get('', { signal })
    .json<Omit<ProductsResponse, 'next'>>()
}

/**
 * Get response from `/api/products?page=`, which is pagination.
 *
 * @export
 * @async
 * @param {number} page
 * @param {?AbortSignal} signal
 * @returns {Promise<ProductsResponse>}
 */
export async function getProductsPagination(
  page: number,
  signal?: AbortSignal
) {
  const searchParams = new URLSearchParams()
  searchParams.set('page', String(page))

  return await productsApi
    .get('', { searchParams, signal })
    .json<ProductsResponse>()
}

/**
 * Get response from `/api/products/:id`
 *
 * @export
 * @async
 * @param {number} productId
 * @param {?AbortSignal} signal
 * @returns {Promise<Product>}
 */
export async function getProductById(productId: number, signal?: AbortSignal) {
  return await productsApi.get(String(productId), { signal }).json<Product>()
}
