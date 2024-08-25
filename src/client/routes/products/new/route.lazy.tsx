import NewProductPage from '@/client/modules/new-product/NewProductPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products/new')({
  component: NewProductPage
})
