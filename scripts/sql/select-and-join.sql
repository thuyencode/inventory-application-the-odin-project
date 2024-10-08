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
  product.*,
  category.name AS category_name
FROM
  product
  JOIN category ON product.category_id = category.id
ORDER BY
  product.id;

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
  category.*,
  COUNT(product.id) AS products_count
FROM
  product
  RIGHT JOIN category ON product.category_id = category.id
GROUP BY
  category.id
ORDER BY
  category.id;

SELECT
  CEIL(COUNT(*) / 10.0) AS pages_count
FROM
  product;