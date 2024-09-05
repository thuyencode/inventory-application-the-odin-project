UPDATE product
SET
  name = 'Essence Mascara Lash Princess'
WHERE
  id = 1
RETURNING
  *;