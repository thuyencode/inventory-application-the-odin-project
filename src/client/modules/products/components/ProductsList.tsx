import { ProductComponentProps } from '../types'
import ProductCard from './ProductCard'

function ProductsList({ products }: Omit<ProductComponentProps, 'display'>) {
  return (
    <div className='grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductCard product={product} key={`product-${product.id}`} />
      ))}
    </div>
  )
}

export default ProductsList
