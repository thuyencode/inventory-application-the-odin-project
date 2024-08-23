import { useSearch } from '@tanstack/react-router'
import AddNewProductBtn from './add-new-product-btn'
import DisplayFormatToggle from './display-format-toggle'
import OrderBySelector from './order-by-selector'
import SortInSelector from './sort-in-selector'

function ProductsFilter() {
  const { display, sortIn, orderBy } = useSearch({ from: '/products' })

  return (
    <div className='flex w-full flex-wrap items-center justify-center gap-2.5'>
      <div className='flex-1'>
        <AddNewProductBtn />
      </div>

      <SortInSelector currentlySortIn={sortIn} />
      <OrderBySelector currentlyOrderBy={orderBy} />
      <DisplayFormatToggle currentlyDisplayIn={display} />
    </div>
  )
}

export default ProductsFilter
