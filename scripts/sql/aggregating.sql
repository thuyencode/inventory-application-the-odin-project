SELECT
  AVG(price) AS avg_price
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