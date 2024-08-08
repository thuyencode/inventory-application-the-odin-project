import { Link } from '@tanstack/react-router'

function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>The Fake Inventory</div>
      <div className='navbar-center'>
        <ul className='menu menu-horizontal join'>
          <li>
            <Link className='join-item' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='join-item' to='/products'>
              Products
            </Link>
          </li>
          <li>
            <Link className='join-item' to='/categories'>
              Categories
            </Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-neutral btn-sm'>Github</button>
      </div>
    </div>
  )
}

export default Header
