import CategoriesPage from '@/client/modules/categories/CategoriesPage'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/categories')({
  component: CategoriesPage
})
