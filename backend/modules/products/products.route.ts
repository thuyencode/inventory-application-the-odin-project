import e from 'express'
import { handleProductByIdApi, handleProductsApi } from './products.controller'

const product_routes = e.Router()

// GET /api/products
product_routes.get('/', handleProductsApi)

// GET /api/products/:id
product_routes.get('/:id', handleProductByIdApi)

export default product_routes
