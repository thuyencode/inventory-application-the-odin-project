import { ProductsPage } from '@/client/modules/products'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products')({
  component: ProductsPage
})
