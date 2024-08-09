import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { createPortal } from 'react-dom'
import ThemeToggle from './theme-toggle'

function MobileNavbar() {
  return createPortal(
    <nav className='drawer-side lg:hidden'>
      <label
        htmlFor='mobile-nav'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>

      <div className='flex min-h-full bg-base-300 dark:border-l-2 dark:border-l-base-content/50'>
        <ul className='menu mt-2 w-72 pr-6'>
          <li>
            <label
              className='text-error hover:bg-error hover:text-error-content'
              htmlFor='mobile-nav'
              aria-label='close sidebar'
            >
              <Icon className='text-xl' icon={'ri:sidebar-unfold-fill'} />
              Close
            </label>
          </li>
          <li>
            <Link to='/'>
              <Icon className='text-xl' icon={'mdi:home'} />
              Home
            </Link>
          </li>
          <li>
            <Link to='/products'>
              <Icon className='text-xl' icon={'mdi:box-variant'} />
              Products
            </Link>
          </li>
          <li>
            <Link to='/categories'>
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
