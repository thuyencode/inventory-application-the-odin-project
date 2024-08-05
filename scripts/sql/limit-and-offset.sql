SELECT
  CEIL(COUNT(*) / 10.0) AS pages_count
FROM
  category;

-- ?limit=10
SELECT
  *
FROM
  product
LIMIT
  10;

-- ?limit=10&page=1
SELECT
  *
FROM
  product
LIMIT
  10;

-- ?limit=10&page=2
SELECT
  *
FROM
  product
LIMIT
  10
OFFSET
  10;

-- ?limit=10&page=3
SELECT
  *
FROM
  product
LIMIT
  10
OFFSET
  10 * 2;