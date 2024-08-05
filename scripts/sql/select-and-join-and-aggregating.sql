SELECT
  *
FROM
  category;

SELECT
  *
FROM
  product;

-- Select all products and their categories
SELECT
  product.name AS product,
  category.name AS category
FROM
  product
  JOIN category ON product.category_id = category.id;

-- Example: Select all products belongs to the category 'groceries'
SELECT
  product.name AS product,
  category.name AS category
FROM
  product
  JOIN category ON product.category_id = category.id
WHERE
  category.name LIKE 'groceries';

SELECT
  AVG(price)
FROM
  product;

-- Calculate the average prices of each categories
SELECT
  category.name AS category,
  AVG(product.price) as avg_price
FROM
  product
  JOIN category ON product.category_id = category.id
GROUP BY
  category.id;

-- Calculate the amount of product on stock of each categories
SELECT
  category.name AS category,
  COUNT(*) as stock
FROM
  product
  JOIN category ON product.category_id = category.id
GROUP BY
  category.id;