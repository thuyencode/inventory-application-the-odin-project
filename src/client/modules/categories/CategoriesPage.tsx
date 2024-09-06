import { getCategoriesQueryOptions } from '@/client/queries/categories.queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import CategoriesList from './components/categories-list'

function CategoriesPage() {
  const {
    data: { categories }
  } = useSuspenseQuery(getCategoriesQueryOptions)

  return <CategoriesList categories={categories} />
}

export default CategoriesPage
