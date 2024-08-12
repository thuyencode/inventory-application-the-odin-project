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