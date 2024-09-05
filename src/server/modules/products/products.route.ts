import e from 'express'
import {
  handleProductByIdApi,
  handleProductsApi,
  handleSubmittedProduct,
  handleUpdateProductByIdApi
} from './products.controller'

const products_routes = e.Router()

// GET /api/products or for example: /api/products/?page=1&orderBy=price&sortIn=desc
products_routes.get('/', handleProductsApi)

// GET /api/products/:id
products_routes.get('/:id', handleProductByIdApi)

// POST /api/products/
products_routes.post('/', handleSubmittedProduct)

// PUT /api/products/:id
products_routes.put('/:id', handleUpdateProductByIdApi)

export default products_routes
