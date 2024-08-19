import AddNewProductPage from '@/client/modules/new-product/AddNewProductPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products/new')({
  component: AddNewProductPage
})
