import { Link, useLoaderData, useSearch } from '@tanstack/react-router'

function ProductsPaginator() {
  const { page: currentPage = 1 } = useSearch({ from: '/products' })
  const { pages_count } = useLoaderData({ from: '/products' })

  return (
    <div className='join border border-base-content/50'>
      {Array.from({ length: pages_count }, (_, index) => {
        const page = index + 1

        return (
          <Link
            key={`pag-product-${page}`}
            className={`btn join-item px-5 ${page === currentPage ? 'btn-primary' : ''}`}
            search={(prev) => ({ ...prev, page })}
            aria-description='Show in cards list'
            tabIndex={0}
          >
            {page}
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsPaginator
