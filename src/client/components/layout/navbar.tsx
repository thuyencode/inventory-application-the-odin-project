import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

function Navbar() {
  return (
    <nav className='navbar container'>
      <div className='navbar-start'>
        <h3>The Fake Inventory</h3>
      </div>

      <div className='navbar-center max-lg:hidden'>
        <ul className='menu menu-horizontal gap-1'>
          <li>
            <Link to='/'>
              <Icon className='text-2xl' icon={'mdi:home'} />
              Home
            </Link>
          </li>
          <li>
            <Link to='/products'>
              <Icon className='text-2xl' icon={'mdi:box-variant'} />
              Products
            </Link>
          </li>
          <li>
            <Link to='/categories'>
              <Icon className='text-2xl' icon={'mdi:tag'} />
              Categories
            </Link>
          </li>
        </ul>
      </div>

      <div className='navbar-end'>
        <ul className='menu menu-horizontal gap-1'>
          <li>
            <a
              className='icon-wrapper'
              href='https://github.com/thuyencode/inventory-application-the-odin-project'
              target='_blank'
            >
              <Icon className='text-2xl' icon={'mdi:github'} />
              Github
            </a>
          </li>
          <li className='lg:hidden'>
            <label htmlFor='mobile-nav' className='drawer-button'>
              <Icon className='text-2xl' icon={'ri:sidebar-fold-fill'} />
            </label>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
