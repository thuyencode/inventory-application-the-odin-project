import { queryGetCategories } from '@/client/queries/categories.queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import CategoriesList from './components/categories-list'

function CategoriesPage() {
  const {
    data: { categories }
  } = useSuspenseQuery(queryGetCategories)

  return <CategoriesList categories={categories} />
}

export default CategoriesPage
