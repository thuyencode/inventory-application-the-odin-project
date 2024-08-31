import { Icon } from '@iconify/react'
import { Link, useSearch } from '@tanstack/react-router'
import { DISPLAY_TYPE, DISPLAY_TYPE_WITH_ICONS } from '../../constants'

function DisplayFormatToggle() {
  const { display: currentlyDisplayIn = 'card' } = useSearch({
    from: '/products'
  })

  return (
    <div className='join'>
      {DISPLAY_TYPE.map((type) => (
        <Link
          className={`btn btn-outline join-item btn-sm ${currentlyDisplayIn === type ? 'btn-active' : ''}`}
          search={(prev) => ({ ...prev, display: type })}
          aria-description={`Show in ${type}`}
          tabIndex={0}
          key={type}
        >
          <Icon className='text-xl' icon={DISPLAY_TYPE_WITH_ICONS[type]} />
        </Link>
      ))}
    </div>
  )
}

export default DisplayFormatToggle
