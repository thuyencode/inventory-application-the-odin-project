import MobileNavbar from './mobile-navbar'
import Navbar from './navbar'

function Header() {
  return (
    <header className='bg-base-200 shadow-xl'>
      <Navbar />
      <MobileNavbar />
    </header>
  )
}

export default Header
