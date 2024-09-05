import EditProductPage from '@/client/modules/edit-product/EditProductPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products/$productId/edit')({
  component: EditProductPage
})
