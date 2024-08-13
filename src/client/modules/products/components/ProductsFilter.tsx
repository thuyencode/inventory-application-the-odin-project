import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { ProductComponentProps } from '../types'

function ProductsFilter({
  display = 'card'
}: Omit<ProductComponentProps, 'products'>) {
  return (
    <div className='join'>
      <Link
        className={`btn btn-outline join-item btn-sm ${display === 'card' ? 'btn-active' : ''}`}
        search={(prev) => ({ ...prev, display: 'card' })}
        aria-description='Show in cards list'
        tabIndex={0}
      >
        <Icon className='text-xl' icon={'mdi:card-text-outline'} />
      </Link>

      <Link
        className={`btn btn-outline join-item btn-sm ${display === 'table' ? 'btn-active' : ''} `}
        search={(prev) => ({ ...prev, display: 'table' })}
        aria-description='Show in table'
        tabIndex={0}
      >
        <Icon className='text-xl' icon={'mdi:table'} />
      </Link>
    </div>
  )
}

export default ProductsFilter
