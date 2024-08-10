import { useLoaderData, useSearch } from '@tanstack/react-router'
import Paginator from './components/Paginator'
import ProductsList from './components/ProductsList'

function ProductsPage() {
  const { page } = useSearch({ from: '/products' })
  const { products, pages_count } = useLoaderData({ from: '/products' })

  return (
    <>
      <ProductsList products={products} />
      <Paginator pagesCount={pages_count} currentPage={page ?? 1} />
    </>
  )
}

export default ProductsPage
