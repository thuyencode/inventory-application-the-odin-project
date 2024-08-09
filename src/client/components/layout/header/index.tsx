import MobileNavbar from './mobile-navbar'
import Navbar from './navbar'

function Header() {
  return (
    <header className='border-b-2 border-b-base-content/50 bg-base-200 shadow-lg'>
      <Navbar />
      <MobileNavbar />
    </header>
  )
}

export default Header
