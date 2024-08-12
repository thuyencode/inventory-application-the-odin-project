import ProductsDisplay from './components/ProductsDisplay'
import ProductsDisplayToggle from './components/ProductsDisplayToggle'
import ProductsPaginator from './components/ProductsPaginator'

function ProductsPage() {
  return (
    <>
      <ProductsDisplayToggle />
      <ProductsDisplay />
      <ProductsPaginator />
    </>
  )
}

export default ProductsPage
