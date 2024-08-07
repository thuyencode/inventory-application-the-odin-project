import e from 'express'
import { handleCategoriesApi, handleCategoryByIdApi } from './controllers'

const categories_routes = e.Router()

// GET /api/categories
categories_routes.get('/', handleCategoriesApi)

// GET /api/categories/:id
categories_routes.get('/:id', handleCategoryByIdApi)

export default categories_routes
