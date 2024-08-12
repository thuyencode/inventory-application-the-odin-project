import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { DisplayType } from '../types'

interface DisplayToggleProps {
  display?: DisplayType
}

function DisplayToggle({ display = 'card' }: DisplayToggleProps) {
  return (
    <div className='join'>
      <Link
        className={`btn join-item btn-sm ${display === 'card' ? 'btn-secondary' : ''}`}
        search={(prev) => ({ ...prev, display: 'card' })}
        aria-description='Show in cards list'
      >
        <Icon className='text-xl' icon={'mdi:card-text-outline'} />
      </Link>
      <Link
        className={`btn join-item btn-sm ${display === 'table' ? 'btn-secondary' : ''} `}
        search={(prev) => ({ ...prev, display: 'table' })}
        aria-description='Show in table'
      >
        <Icon className='text-xl' icon={'mdi:table'} />
      </Link>
    </div>
  )
}

export default DisplayToggle
