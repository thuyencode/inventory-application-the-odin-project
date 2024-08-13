import e from 'express'
import { handleProductByIdApi, handleProductsApi } from './products.controller'

const products_routes = e.Router()

// GET /api/products or for example: /api/products/?page=1&sortBy=price&orderBy=desc
products_routes.get('/', handleProductsApi)

// GET /api/products/:id
products_routes.get('/:id', handleProductByIdApi)

export default products_routes
