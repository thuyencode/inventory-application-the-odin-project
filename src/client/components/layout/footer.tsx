import { Icon } from '@iconify/react'

function Footer() {
  return (
    <footer className='footer footer-center bg-base-200 p-5 shadow-xl'>
      <nav>
        <a
          className='icon-wrapper link-hover link font-medium'
          tabIndex={0}
          href='https://github.com/thuyencode/inventory-application-the-odin-project'
          target='_blank'
        >
          <Icon className='text-xl' icon={'mdi:github'} />
          Thuyen Code
        </a>
      </nav>
    </footer>
  )
}

export default Footer
