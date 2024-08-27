import { useLoaderData } from '@tanstack/react-router'
import CategoriesList from './components/categories-list'

function CategoriesPage() {
  const { categories } = useLoaderData({ from: '/categories' })

  return <CategoriesList categories={categories}></CategoriesList>
}

export default CategoriesPage
