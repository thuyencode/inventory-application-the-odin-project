import { queryGetProductsWithFilters } from '@/client/queries/products.queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useLoaderDeps } from '@tanstack/react-router'
import {
  ProductsDisplay,
  ProductsFilter,
  ProductsPaginator
} from './components'

function ProductsPage() {
  const { display, page = 1, ...filters } = useLoaderDeps({ from: '/products' })
  const {
    data: { products, pages_count }
  } = useSuspenseQuery(queryGetProductsWithFilters({ ...filters, page }))

  return (
    <>
      <ProductsFilter />
      <ProductsDisplay display={display} products={products} />
      <ProductsPaginator pagesCount={pages_count} currentPage={page ?? 1} />
    </>
  )
}

export default ProductsPage
