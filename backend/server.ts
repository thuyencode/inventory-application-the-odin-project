import compression from 'compression'
import e from 'express'
import { getPublicPath } from './libs/utils'
import { error_handler, undefined_routes_handler } from './middlewares'

const app = e()

app.disable('x-powered-by')

// Compression middleware
app.use(compression())

// Body parser middleware
app.use(e.json())
app.use(e.urlencoded({ extended: true }))

// Setup static folder
app.use(e.static(getPublicPath()))

// Handle undefined routes
app.use(undefined_routes_handler)

// Error catcher
app.use(error_handler)

export default app
