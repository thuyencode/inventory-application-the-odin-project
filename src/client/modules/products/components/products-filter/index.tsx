import { Icon } from '@iconify/react/dist/iconify.js'
import { Link } from '@tanstack/react-router'
import DisplayFormatToggle from './display-format-toggle'
import OrderBySelector from './order-by-selector'
import SortInSelector from './sort-in-selector'

function ProductsFilter() {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2.5'>
      <Link
        className='btn btn-primary btn-sm gap-1 md:mr-auto'
        to='/products/new'
      >
        <Icon className='text-xl' icon={'mdi:add'} />
        New Product
      </Link>

      <SortInSelector />
      <OrderBySelector />
      <DisplayFormatToggle />
    </div>
  )
}

export default ProductsFilter
