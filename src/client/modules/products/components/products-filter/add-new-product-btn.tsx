import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

function AddNewProductBtn() {
  return (
    <Link
      className='icon-wrapper btn btn-primary btn-sm m-0 gap-1 capitalize'
      to='/products/new'
    >
      <Icon className='mb-0.5 text-xl' icon={'mdi:add'} />
      New product
    </Link>
  )
}

export default AddNewProductBtn
