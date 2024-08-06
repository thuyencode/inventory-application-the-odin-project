import type { Category } from '@shared/types'
import pool from './pool'

/**
 * Select all rows in the `category` table
 *
 * @export
 * @async
 * @returns {Promise<Category[]>}
 */
export async function selectCategories(): Promise<Category[]> {
  const { rows }: { rows: Category[] } = await pool.query(
    'SELECT * FROM category'
  )

  return rows
}

/**
 * Select a row of the `category` table where `category.id` equals `id`
 *
 * @export
 * @async
 * @param {number} id
 * @returns {Promise<Category | undefined>}
 */
export async function selectCategoryById(
  id: number
): Promise<Category | undefined> {
  const { rows }: { rows: Category[] } = await pool.query(
    'SELECT * FROM category WHERE id = $1',
    [id]
  )

  return rows[0]
}
