import { useSearch } from '@tanstack/react-router'
import ProductsList from './ProductsList'
import ProductsTable from './ProductsTable'

function ProductsDisplay() {
  const { display } = useSearch({ from: '/products' })

  if (display === 'table') {
    return <ProductsTable />
  }

  return <ProductsList />
}

export default ProductsDisplay
