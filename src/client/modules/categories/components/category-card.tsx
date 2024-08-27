import { Category } from '@/shared/types'

interface CategoryCardProps {
  category: Category
}

function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className='card card-side card-compact h-min rounded-md border border-base-content/20 bg-base-300 shadow-lg'>
      <figure>
        <img
          className='size-full max-h-20 max-w-20'
          src={`https://ui-avatars.com/api/?name=${category.name}`}
          alt={category.name}
        />
      </figure>

      <div className='card-body justify-center gap-0 !py-0'>
        <span className='text-base capitalize'>{category.name}</span>
        <span className='text-base font-light'>
          Products count: {category.products_count}
        </span>
      </div>
    </div>
  )
}

export default CategoryCard
