import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import ThemeToggle from './theme-toggle'

function Navbar() {
  return (
    <nav className='container navbar'>
      <div className='navbar-start'>
        <h3
          className='icon-wrapper gap-4'
          aria-description='Title: The Fake Inventory'
        >
          The Fake
          <Icon className='text-3xl' icon={'mdi:warehouse'} />
        </h3>
      </div>

      <div className='navbar-center max-lg:hidden'>
        <ul className='menu menu-horizontal gap-1'>
          <li>
            <Link tabIndex={0} to='/'>
              <Icon className='text-2xl' icon={'mdi:home'} />
              Home
            </Link>
          </li>
          <li>
            <Link tabIndex={0} to='/products'>
              <Icon className='text-2xl' icon={'mdi:box-variant'} />
              Products
            </Link>
          </li>
          <li>
            <Link tabIndex={0} to='/categories'>
              <Icon className='text-2xl' icon={'mdi:tag'} />
              Categories
            </Link>
          </li>
        </ul>
      </div>

      <div className='navbar-end'>
        <ul className='menu menu-horizontal gap-1'>
          <li className='max-lg:hidden'>
            <ThemeToggle />
          </li>
          <li className='lg:hidden'>
            <label
              tabIndex={0}
              htmlFor='mobile-nav'
              className='drawer-button'
              aria-description='Open the sidebar'
            >
              <Icon className='text-2xl' icon={'ri:sidebar-fold-fill'} />
            </label>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
