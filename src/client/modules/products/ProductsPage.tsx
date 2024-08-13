import { useLoaderData, useSearch } from '@tanstack/react-router'
import {
  ProductsDisplay,
  ProductsFilter,
  ProductsPaginator
} from './components'

function ProductsPage() {
  const { page, display } = useSearch({ from: '/products' })
  const { products, pages_count } = useLoaderData({ from: '/products' })

  return (
    <>
      <ProductsFilter display={display} />
      <ProductsDisplay display={display} products={products} />
      <ProductsPaginator pagesCount={pages_count} currentPage={page ?? 1} />
    </>
  )
}

export default ProductsPage
