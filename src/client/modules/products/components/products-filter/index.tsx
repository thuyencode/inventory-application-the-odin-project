import { useSearch } from '@tanstack/react-router'
import DisplayFormatToggle from './display-format-toggle'
import OrderBySelector from './order-by-selector'
import SortInSelector from './sort-in-selector'

function ProductsFilter() {
  const { display, sortIn, orderBy } = useSearch({ from: '/products' })

  return (
    <div className='flex items-center gap-2.5'>
      <SortInSelector currentlySortIn={sortIn} />
      <OrderBySelector currentlyOrderBy={orderBy} />
      <DisplayFormatToggle currentlyDisplayIn={display} />
    </div>
  )
}

export default ProductsFilter
