import { Product, SelectProductsOptions } from '@/shared/types'
import pool from './pool.db'

/**
 * Select all rows from the `product` table.
 *
 * @export
 * @async
 * @param {SelectProductsOptions} options
 * @returns {Promise<Product[]>}
 */
export async function selectProducts(
  options?: SelectProductsOptions
): Promise<Product[]> {
  let sqlQuery = `
    SELECT product.*, category.name AS category_name
    FROM product
    JOIN category ON product.category_id = category.id`

  if (options === undefined) {
    sqlQuery += ' ORDER BY product.id'
  } else {
    const { limit, page, orderBy = 'id', sortIn = 'asc' } = options

    sqlQuery += ` ORDER BY product.${orderBy}`
    sqlQuery += ` ${sortIn.toUpperCase()}`

    if (page !== undefined) {
      const offset = limit * (page - 1)
      sqlQuery += ` LIMIT ${limit} OFFSET ${offset}`
    }
  }

  const { rows }: { rows: Product[] } = await pool.query(sqlQuery)

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
