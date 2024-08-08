import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { createPortal } from 'react-dom'

function MobileNavbar() {
  return createPortal(
    <nav className='drawer-side lg:hidden'>
      <label
        htmlFor='mobile-nav'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>

      <div className='bg-base-300 flex min-h-full flex-row pr-[0.65rem]'>
        <ul className='menu mt-2 w-80'>
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
        </ul>

        <ul className='menu mt-2'>
          <li>
            <label htmlFor='mobile-nav' aria-label='close sidebar'>
              <Icon className='text-2xl' icon={'ri:sidebar-unfold-fill'} />
            </label>
          </li>
        </ul>
      </div>
    </nav>,
    document.body
  )
}

export default MobileNavbar
