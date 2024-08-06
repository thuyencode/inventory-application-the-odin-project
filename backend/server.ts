import compression from 'compression'
import e from 'express'
import { getPublicPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'
import categories_routes from './modules/categories/categories.route'
import products_routes from './modules/products/products.route'

const app = e()

app.disable('x-powered-by')

// Compression middleware
app.use(compression())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: true }))

// Setup static folder
app.use(e.static(getPublicPath()))

// Define routes
app.use('/api/products', products_routes)
app.use('/api/categories', categories_routes)

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

export default app
