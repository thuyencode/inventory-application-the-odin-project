import {
  Product,
  SelectProductsOptions,
  SubmittedProduct
} from '@/shared/types'
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

    if (page) {
      const offset = limit * (page - 1)
      sqlQuery += ` LIMIT ${limit} OFFSET ${offset}`
    }
  }

  const { rows } = await pool.query<Product>(sqlQuery)

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
  const { rows } = await pool.query<Product>(
    `SELECT product.*, category.name AS category_name
    FROM product
    JOIN category ON product.category_id = category.id
    WHERE product.id = $1`,
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
 * @returns {Promise<number>}
 */
export async function selectPagesCount(limit: number): Promise<number> {
  const { rows } = await pool.query(
    'SELECT CEIL(COUNT(*) / $1::float) AS pages_count FROM product',
    [limit]
  )

  return rows[0].pages_count
}

/**
 * Calculate the maximum page can be paginated
 *
 * @export
 * @async
 * @param {number} limit
 * @returns {Promise<Product | unknown>}
 */
export async function insertNewProduct(
  product: SubmittedProduct
): Promise<Product | unknown> {
  try {
    const sqlQuery = `
  INSERT INTO
  product (name, description, price, stock, brand, sku, weight, category_id, image_url)
VALUES
  ($1::text, $2::text, $3::float, $4::int, $5::text, $6::text, $7::float, $8::int, $9::text)
RETURNING *;`

    const { rows } = await pool.query<Product>(sqlQuery, [
      product.name,
      product.description,
      product.price,
      product.stock,
      product.brand,
      product.sku,
      product.weight,
      product.category_id,
      product.image_url
    ])

    return rows[0]
  } catch (error) {
    console.error(error)

    return error
  }
}
