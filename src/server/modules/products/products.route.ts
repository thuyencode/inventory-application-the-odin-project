import e from 'express'
import {
  handleDeleteProductByIdApi,
  handleGetProductByIdApi,
  handleGetProductsApi,
  handleSubmittedProductApi,
  handleUpdateProductByIdApi
} from './products.controller'

const products_routes = e.Router()

// GET /api/products or for example: /api/products/?page=1&orderBy=price&sortIn=desc
products_routes.get('/', handleGetProductsApi)

// GET /api/products/:id
products_routes.get('/:id', handleGetProductByIdApi)

// POST /api/products/
products_routes.post('/', handleSubmittedProductApi)

// PUT /api/products/:id
products_routes.put('/:id', handleUpdateProductByIdApi)

// DELETE /api/products/:id
products_routes.delete('/:id', handleDeleteProductByIdApi)

export default products_routes
