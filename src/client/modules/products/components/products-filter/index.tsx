import { useSearch } from '@tanstack/react-router'
import DisplayFormatToggle from './display-format-toggle'
import OrderBySelector from './order-by-selector'
import SortInSelector from './sort-in-selector'

function ProductsFilter() {
  const { display, sortIn, orderBy } = useSearch({ from: '/products' })

  return (
    <div className='flex items-center gap-2.5'>
      <SortInSelector sortIn={sortIn} />
      <OrderBySelector orderBy={orderBy} />
      <DisplayFormatToggle display={display} />
    </div>
  )
}

export default ProductsFilter
