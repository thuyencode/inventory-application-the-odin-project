import { Product } from '@/shared/types'
import ProductCard from './ProductCard'

interface ProductsListProps {
  products: Product[]
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductCard product={product} key={`product-${product.id}`} />
      ))}
    </div>
  )
}

export default ProductsList
