import { ProductsPageComponentProps } from '@/client/types'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { DISPLAY_TYPE, DISPLAY_TYPE_WITH_ICONS } from '../../constants'

function DisplayFormatToggle({
  display = 'card'
}: Omit<ProductsPageComponentProps, 'products'>) {
  return (
    <div className='join'>
      {DISPLAY_TYPE.map((type) => (
        <Link
          className={`btn btn-outline join-item btn-sm ${display === type ? 'btn-active' : ''}`}
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
