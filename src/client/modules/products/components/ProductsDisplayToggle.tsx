import { Icon } from '@iconify/react'
import { Link, useSearch } from '@tanstack/react-router'

function ProductsDisplayToggle() {
  const { display } = useSearch({ from: '/products' })

  return (
    <div className='join'>
      <Link
        className={`btn join-item btn-sm ${display !== 'table' ? 'btn-secondary' : ''}`}
        search={(prev) => ({ ...prev, display: 'card' })}
        aria-description='Show in cards list'
        tabIndex={0}
      >
        <Icon className='text-xl' icon={'mdi:card-text-outline'} />
      </Link>

      <Link
        className={`btn join-item btn-sm ${display === 'table' ? 'btn-secondary' : ''} `}
        search={(prev) => ({ ...prev, display: 'table' })}
        aria-description='Show in table'
        tabIndex={0}
      >
        <Icon className='text-xl' icon={'mdi:table'} />
      </Link>
    </div>
  )
}

export default ProductsDisplayToggle
