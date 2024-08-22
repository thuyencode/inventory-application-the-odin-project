// Thanks to: https://github.com/brianc/node-postgres/issues/957#issuecomment-295583050

import pg from 'pg'
import categories from './dummy-db/categories.json' assert { type: 'json' }
import products from './dummy-db/products.json' assert { type: 'json' }

const CREATE_CATEGORY_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS
    category (
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        created_time TIMESTAMP NOT NULL DEFAULT NOW(),
        name VARCHAR(255) UNIQUE NOT NULL
    );
`

const CREATE_PRODUCT_TABLE_QUERY = `
CREATE TABLE IF NOT EXISTS
    product (
        id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        created_time TIMESTAMP NOT NULL DEFAULT NOW(),
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(500),
        price FLOAT NOT NULL,
        stock INT NOT NULL,
        brand VARCHAR(255),
        sku VARCHAR(255) NOT NULL,
        weight INT NOT NULL,
        image_url VARCHAR(255) DEFAULT 'https://dummyjson.com/image/400?text=No+Image&fontFamily=quicksand',
        category_id INT NOT NULL,
        CONSTRAINT fk_category FOREIGN KEY (category_id) REFERENCES category (id)
    );
`

const INSERT_INTO_CATEGORY_QUERY = `
INSERT INTO
  category (name)
SELECT
  *
FROM
  UNNEST ($1::text[])
`

const INSERT_INTO_PRODUCT_QUERY = `
INSERT INTO
  product (
    name,
    description,
    price,
    stock,
    brand,
    sku,
    weight,
    category_id
  )
SELECT
  *
FROM
  UNNEST(
    $1::text[],
    $2::text[],
    $3::float[],
    $4::int[],
    $5::text[],
    $6::text[],
    $7::float[],
    $8::int[]
  );`

function getProductsToBeInserted() {
  return products.products.reduce<Array<unknown[]>>(
    (acc, product) => {
      acc[0].push(product.name)
      acc[1].push(product.description)
      acc[2].push(product.price)
      acc[3].push(product.stock)
      acc[4].push(product.brand)
      acc[5].push(product.sku)
      acc[6].push(product.weight)
      acc[7].push(categories.indexOf(product.category) + 1)

      return acc
    },
    [[], [], [], [], [], [], [], []]
  )
}

async function main() {
  console.log('Seeding...')

  const client = new pg.Client()

  await client.connect()

  await client.query(CREATE_CATEGORY_TABLE_QUERY)
  await client.query(CREATE_PRODUCT_TABLE_QUERY)
  await client.query(INSERT_INTO_CATEGORY_QUERY, [categories])
  await client.query(INSERT_INTO_PRODUCT_QUERY, getProductsToBeInserted())

  await client.end()

  console.log('Done')
}

main()
// console.log(getProductsToBeInserted())
