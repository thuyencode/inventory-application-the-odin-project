import compression from 'compression'
import cors from 'cors'
import e from 'express'
import helmet from 'helmet'
import ViteExpress from 'vite-express'
import { error_handler } from './middlewares'
import categories_routes from './modules/categories/routes'
import products_routes from './modules/products/routes'

const app = e()

// CORS
app.use(cors())

// Compression middleware
app.use(compression())

// Security hardening
app.use(helmet())

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
