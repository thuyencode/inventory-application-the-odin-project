import { Category } from '@/shared/types'
import { CategoriesResponse } from '../types'
import baseApi from './baseApi'

const categoriesApi = baseApi.extend((options) => ({
  prefixUrl: `${options.prefixUrl}/categories`
}))

/**
 * Get response from `/api/categories`.
 *
 * @export
 * @async
 * @param {?AbortSignal} signal
 * @returns {Promise<CategoriesResponse>}
 */
export async function getCategories(signal?: AbortSignal) {
  const data = await categoriesApi
    .get('', { signal })
    .json<CategoriesResponse>()

  return {
    ...data,
    categories: data.categories.map((category) => ({
      ...category,
      products_count: Number(category.products_count)
    }))
  }
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
