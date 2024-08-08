import compression from 'compression'
import e from 'express'
import ViteExpress from 'vite-express'
import { error_handler } from './middlewares'
import categories_routes from './modules/categories/routes'
import products_routes from './modules/products/routes'

const app = e()

app.disable('x-powered-by')

// Compression middleware
app.use(compression())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: true }))

// Define routes
app.use('/api/products', products_routes)
app.use('/api/categories', categories_routes)

// Error catcher
app.use(error_handler)

const PORT = Number(process.env.PORT || 8080)

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening on port ${PORT}...`)
)
