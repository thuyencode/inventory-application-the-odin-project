import { Product } from '@/shared/types'
import pool from './pool.db'

/**
 * Select all rows in the `product` table
 *
 * @export
 * @async
 * @returns {Promise<Product[]>}
 */
export async function selectProducts(): Promise<Product[]>

/**
 * Select a part of rows in the `product` table
 *
 * @export
 * @async
 * @param {number} limit
 * @param {?number} [page]
 * @returns {Promise<Product[]>}
 */
export async function selectProducts(
  limit: number,
  page?: number
): Promise<Product[]>

export async function selectProducts(
  limit?: number,
  page: number = 1
): Promise<Product[]> {
  if (typeof limit === 'undefined') {
    const { rows }: { rows: Product[] } = await pool.query(
      `SELECT product.*, category.name AS category_name
      FROM product
      JOIN category ON product.category_id = category.id`
    )

    return rows
  }

  const offset = page <= 1 ? 0 : limit * (page - 1)

  const { rows }: { rows: Product[] } = await pool.query(
    `SELECT product.*, category.name AS category_name
    FROM product
    JOIN category ON product.category_id = category.id LIMIT $1 OFFSET $2`,
    [limit, offset]
  )

  return rows
}

/**
 * Select a row of the `product` table where `product.id` equals `id`
 *
 * @export
 * @async
 * @param {number} id
 * @returns {Promise<Product | undefined>}
 */
export async function selectProductById(
  id: number
): Promise<Product | undefined> {
  const { rows }: { rows: Product[] } = await pool.query(
    'SELECT * FROM product WHERE id = $1',
    [id]
  )

  return rows[0]
}

/**
 * Calculate the maximum page can be paginated
 *
 * @export
 * @async
 * @param {number} limit
 * @returns {Promise<unknown>}
 */
export async function selectPagesCount(limit: number): Promise<number> {
  const { rows } = await pool.query(
    'SELECT CEIL(COUNT(*) / $1::float) AS pages_count FROM category',
    [limit]
  )

  return rows[0].pages_count
}

selectProducts()
