import ProductDeletionDialog from '@/client/components/product-deletion-dialog'
import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/products')({
  component: () => (
    <>
      <Outlet />
      <ProductDeletionDialog />
    </>
  )
})
