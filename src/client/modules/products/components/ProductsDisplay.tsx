import { ProductComponentProps } from '../types'
import ProductsList from './ProductsList'
import ProductsTable from './ProductsTable'

function ProductsDisplay({
  display = 'card',
  products
}: ProductComponentProps) {
  switch (display) {
    case 'card':
      return <ProductsList products={products} />

    case 'table':
      return <ProductsTable products={products} />
  }
}

export default ProductsDisplay
