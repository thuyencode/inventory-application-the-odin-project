import { Category } from '@/shared/types'
import { CategoriesResponse } from '../types'
import baseApi from './baseApi'

const categoriesApi = baseApi.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/categories`
}))

/**
 * Get response from `/api/categories`
 *
 * @export
 * @async
 * @returns {Promise<CategoriesResponse>}
 */
export async function getCategories(): Promise<CategoriesResponse>

/**
 * Get response from `/api/categories`. Supports `AbortSignal`.
 *
 * @export
 * @async
 * @param {AbortSignal} signal
 * @returns {Promise<CategoriesResponse>}
 */
export async function getCategories(
  signal: AbortSignal
): Promise<CategoriesResponse>

export async function getCategories(signal?: AbortSignal) {
  return await categoriesApi.get('', { signal }).json<CategoriesResponse>()
}

/**
 * Get response from `/api/categories/:id`
 *
 * @export
 * @async
 * @param {number} categoryId
 * @param {?AbortSignal} signal
 * @returns {Promise<Category>}
 */
export async function getCategoryById(
  categoryId: number,
  signal?: AbortSignal
) {
  return await categoriesApi
    .get(String(categoryId), { signal })
    .json<Category>()
}
