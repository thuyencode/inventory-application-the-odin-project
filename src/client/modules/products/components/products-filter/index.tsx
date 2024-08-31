import DisplayFormatToggle from './display-format-toggle'
import OrderBySelector from './order-by-selector'
import SortInSelector from './sort-in-selector'

function ProductsFilter() {
  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2.5'>
      <SortInSelector />
      <OrderBySelector />
      <DisplayFormatToggle />
    </div>
  )
}

export default ProductsFilter
