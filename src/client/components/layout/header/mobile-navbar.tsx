import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { createPortal } from 'react-dom'
import ThemeToggle from './theme-toggle'

function MobileNavbar() {
  return createPortal(
    <nav className='drawer-side md:hidden'>
      <label
        htmlFor='mobile-nav'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>

      <div className='flex min-h-full bg-base-300 shadow-lg'>
        <ul className='menu z-10 mt-2 w-72 pr-6'>
          <li>
            <label
              tabIndex={0}
              className='text-error hover:bg-error/70 hover:text-error-content focus:bg-error/70 focus:text-error-content active:!bg-error active:!text-error-content'
              htmlFor='mobile-nav'
              aria-label='close sidebar'
            >
              <Icon className='text-xl' icon={'ri:sidebar-fold-fill'} />
              Close
            </label>
          </li>
          <li>
            <Link tabIndex={0} to='/products'>
              <Icon className='text-xl' icon={'mdi:box-variant'} />
              Products
            </Link>
          </li>
          <li>
            <Link tabIndex={0} to='/categories'>
              <Icon className='text-xl' icon={'mdi:tag'} />
              Categories
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>,
    document.body
  )
}

export default MobileNavbar
