import withClose from '@/client/hoc/with-close'
import { SORT_IN, SORT_IN_WITH_ICONS } from '@/shared/constants'
import { Icon } from '@iconify/react'
import { Link, useSearch } from '@tanstack/react-router'
import { forwardRef } from 'react'

const SortInSelector = withClose(
  forwardRef<HTMLDetailsElement>(function (_, ref) {
    const { sortIn: currentlySortIn } = useSearch({ from: '/products' })

    return (
      <details className='dropdown dropdown-end' ref={ref}>
        <summary className='btn btn-outline btn-sm m-0 gap-1 capitalize'>
          Sort in
          {currentlySortIn ? `: ${currentlySortIn}` : null}
        </summary>

        <ul className='menu dropdown-content menu-md z-[1] mt-2.5 w-min rounded-box border border-base-content/50 bg-base-300 p-2 capitalize shadow'>
          {SORT_IN.map((type) => (
            <li key={type}>
              <Link
                className='justify-between'
                to='.'
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
  })
)

export default SortInSelector
