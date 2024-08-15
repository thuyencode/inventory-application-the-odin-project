import { ProductsPageComponentProps } from '@/client/types'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { DISPLAY_TYPE, DISPLAY_TYPE_WITH_ICONS } from '../../constants'

interface DisplayFormatToggleProps {
  currentlyDisplayIn: ProductsPageComponentProps['display']
}

function DisplayFormatToggle({
  currentlyDisplayIn = 'card'
}: DisplayFormatToggleProps) {
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
