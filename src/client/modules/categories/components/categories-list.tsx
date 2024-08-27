import { Category } from '@/shared/types'
import CategoryCard from './category-card'

interface CategoriesListProps {
  categories: Category[]
}

function CategoriesList({ categories }: CategoriesListProps) {
  return (
    <div className='grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {categories.map((category) => (
        <CategoryCard category={category} key={`category_${category.id}`} />
      ))}
    </div>
  )
}

export default CategoriesList
