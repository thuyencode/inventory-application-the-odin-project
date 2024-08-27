import {
  Product,
  SelectProductsDefaultLimitOptions,
  SubmittedProduct
} from '@/shared/types'
import { ProductsResponse } from '../types'
import baseApi from './baseApi'

const productsApi = baseApi.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/products`
}))

/**
 * Get response GET `/api/products`.
 *
 * @export
 * @async
 * @param {?AbortSignal} [signal]
 * @returns {Promise<Omit<ProductsResponse, 'next'>>}
 */
export async function getProducts(
  signal?: AbortSignal
): Promise<Omit<ProductsResponse, 'next'>>

/**
 * Get response from an URL likes GET `/api/products?page=1&orderBy=price&sortIn=desc`.
 *
 * @export
 * @async
 * @param {?AbortSignal} [signal]
 * @param {?SelectProductsDefaultLimitOptions} [filters]
 * @returns {Promise<ProductsResponse>}
 */
export async function getProducts(
  signal?: AbortSignal,
  filters?: SelectProductsDefaultLimitOptions
): Promise<ProductsResponse>

export async function getProducts(
  signal?: AbortSignal,
  filters?: SelectProductsDefaultLimitOptions
) {
  if (filters === undefined) {
    return await productsApi
      .get('', { signal })
      .json<Omit<ProductsResponse, 'next'>>()
  }

  const searchParams = new URLSearchParams()

  for (const [key, value] of Object.entries(filters)) {
    searchParams.set(key, String(value))
  }

  const data = await productsApi
    .get('', { signal, searchParams })
    .json<ProductsResponse>()

  return {
    ...data,
    products: data.products.map((product) => ({
      ...product,
      created_time: new Date(product.created_time)
    }))
  }
}

/**
 * Get response from `/api/products/:id`.
 *
 * @export
 * @async
 * @param {number} productId
 * @param {?AbortSignal} signal
 * @returns {Promise<Product>}
 */
export async function getProductById(
  productId: number,
  signal?: AbortSignal
): Promise<Product> {
  const data = await productsApi
    .get(String(productId), { signal })
    .json<Product>()

  return { ...data, created_time: new Date(data.created_time) }
}

/**
 * Post data to `/api/products`.
 *
 * @export
 * @async
 * @param {SubmittedProduct} product
 * @returns {unknown}
 */
export async function postProduct(product: SubmittedProduct) {
  return await productsApi.post('', { json: product }).json<Product>()
}
