import { Product } from '@/shared/types'
import { DisplayType } from '../types'
import ProductsList from './ProductsList'
import ProductsTable from './ProductsTable'

interface DisplayTypeToggleProps {
  display?: DisplayType
  products: Product[]
}

function ProductsDisplay({
  display = 'card',
  products
}: DisplayTypeToggleProps) {
  switch (display) {
    case 'card':
      return <ProductsList products={products} />

    case 'table':
      return <ProductsTable products={products} />
  }
}

export default ProductsDisplay
