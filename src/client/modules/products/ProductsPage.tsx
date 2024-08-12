import { useLoaderData, useSearch } from '@tanstack/react-router'
import ProductsDisplay from './components/ProductsDisplay'
import ProductsDisplayToggle from './components/ProductsDisplayToggle'
import ProductsPaginator from './components/ProductsPaginator'

function ProductsPage() {
  const { page, display } = useSearch({ from: '/products' })
  const { products, pages_count } = useLoaderData({ from: '/products' })

  return (
    <>
      <ProductsDisplayToggle display={display} />
      <ProductsDisplay display={display} products={products} />
      <ProductsPaginator pagesCount={pages_count} currentPage={page ?? 1} />
    </>
  )
}

export default ProductsPage
