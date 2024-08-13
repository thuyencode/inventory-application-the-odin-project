import { ProductComponentProps } from '@/client/types'
import ProductsList from './products-list'
import ProductsTable from './products-table'

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
