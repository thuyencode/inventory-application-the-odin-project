import { Product } from '@/shared/types'
import ProductCard from './ProductsCard'

interface ProductsListProps {
  products: Product[]
}

function ProductsList({ products }: ProductsListProps) {
  return (
    <div className='grid-cols-ram grid w-full place-items-center gap-10'>
      {products.map((product) => (
        <ProductCard product={product} key={`product=${product.id}`} />
      ))}
    </div>
  )
}

export default ProductsList
