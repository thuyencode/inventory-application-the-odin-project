import { Link } from '@tanstack/react-router'

interface ProductsPaginatorProps {
  pagesCount: number
  currentPage: number
}

function ProductsPaginator({
  pagesCount,
  currentPage
}: ProductsPaginatorProps) {
  return (
    <div className='join'>
      {Array.from({ length: pagesCount }, (_, index) => {
        const page = index + 1

        return (
          <Link
            key={`go-to-page-${page}`}
            className={`btn btn-outline join-item px-5 ${page === currentPage ? 'btn-active' : ''}`}
            search={(prev) => ({ ...prev, page })}
            aria-description={`Go to page ${page}`}
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
