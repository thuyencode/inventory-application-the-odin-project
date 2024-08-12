import { Link } from '@tanstack/react-router'

interface Paginator {
  pagesCount: number
  currentPage: number
}

function Paginator({ pagesCount, currentPage }: Paginator) {
  return (
    <div className='join border border-base-content/50'>
      {Array.from({ length: pagesCount }, (_, index) => {
        const page = index + 1

        return (
          <Link
            key={`pag-product-${page}`}
            className={`btn join-item px-5 ${page === currentPage ? 'btn-primary' : ''}`}
            search={(prev) => ({ ...prev, page })}
            aria-description='Show in cards list'
          >
            {page}
          </Link>
        )
      })}
    </div>
  )
}

export default Paginator
