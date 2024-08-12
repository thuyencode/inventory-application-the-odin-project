import { useLoaderData, useSearch } from '@tanstack/react-router'
import DisplayToggle from './components/DisplayTypeToggle'
import Paginator from './components/Paginator'
import ProductsDisplay from './components/ProductsDisplay'

function ProductsPage() {
  const { page, display } = useSearch({ from: '/products' })
  const { products, pages_count } = useLoaderData({ from: '/products' })

  return (
    <>
      <DisplayToggle display={display} />
      <ProductsDisplay display={display} products={products} />
      <Paginator pagesCount={pages_count} currentPage={page ?? 1} />
    </>
  )
}

export default ProductsPage
