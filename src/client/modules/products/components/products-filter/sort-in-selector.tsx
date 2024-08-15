import { ProductsSearch } from '@/client/types'
import { SORT_IN, SORT_IN_WITH_ICONS } from '@/shared/constants'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

function SortInSelector({ sortIn }: Pick<ProductsSearch, 'sortIn'>) {
  return (
    <details className='dropdown dropdown-end'>
      <summary className='btn btn-outline btn-sm m-0 capitalize'>
        {sortIn ? `Sort in: ${sortIn}` : 'Sort in'}
      </summary>

      <ul className='menu dropdown-content menu-md z-[1] mt-2.5 w-44 rounded-box border border-base-content/50 bg-base-300 p-2 capitalize shadow'>
        {SORT_IN.map((type) => (
          <li key={type}>
            <Link
              className='justify-between'
              search={(prev) => ({ ...prev, sortIn: type })}
              aria-description={`Sort in: ${type}`}
              tabIndex={0}
            >
              <Icon className='text-xl' icon={SORT_IN_WITH_ICONS[type]} />
              {`${type}ending`}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default SortInSelector
