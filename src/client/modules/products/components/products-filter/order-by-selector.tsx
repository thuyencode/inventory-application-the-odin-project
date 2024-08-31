import { ORDER_BY, ORDER_BY_WITH_ICONS } from '@/shared/constants'
import { Icon } from '@iconify/react'
import { Link, useSearch } from '@tanstack/react-router'

function OrderBySelector() {
  const { orderBy: currentlyOrderBy } = useSearch({ from: '/products' })

  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-outline btn-sm m-0 gap-1 capitalize'>
        Order by
        {currentlyOrderBy ? `: ${currentlyOrderBy.replace('_', ' ')}` : null}
      </summary>

      <ul className='menu dropdown-content menu-md z-[1] mt-2.5 w-min rounded-box border border-base-content/50 bg-base-300 p-2 capitalize shadow'>
        {ORDER_BY.map((type) => (
          <li key={type}>
            <Link
              className='justify-between text-nowrap'
              search={(prev) => ({ ...prev, orderBy: type })}
              aria-description={`Order by: ${type}`}
              tabIndex={0}
            >
              <Icon className='text-xl' icon={ORDER_BY_WITH_ICONS[type]} />
              {type.replace('_', ' ')}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default OrderBySelector
