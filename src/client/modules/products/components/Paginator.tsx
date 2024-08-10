import { useNavigate } from '@tanstack/react-router'

interface Paginator {
  pagesCount: number
  currentPage: number
}

function Paginator({ pagesCount, currentPage }: Paginator) {
  const navigate = useNavigate()

  return (
    <div className='join'>
      {Array.from({ length: pagesCount }, (_, index) => {
        const page = index + 1

        return (
          <input
            key={`paginator-${page}`}
            className='btn btn-square join-item'
            type='radio'
            name='options'
            aria-label={`${page}`}
            defaultChecked={page === currentPage}
            onClick={() => {
              navigate({ search: { page } })
            }}
          />
        )
      })}
    </div>
  )
}

export default Paginator
