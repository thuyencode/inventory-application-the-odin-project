import { Link } from '@tanstack/react-router'

function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <h3>The Fake Inventory</h3>
      </div>
      <div className='navbar-center'>
        <ul className='menu menu-horizontal gap-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/categories'>Categories</Link>
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
