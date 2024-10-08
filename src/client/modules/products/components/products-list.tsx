import { ProductsPageComponentProps } from '@/client/types'
import ProductCard from './product-card'

function ProductsList({
  products
}: Omit<ProductsPageComponentProps, 'display'>) {
  if (products.length === 0) {
    return <h2>There're no products</h2>
  }

  return (
    <div className='grid w-full flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <ProductCard product={product} key={`${product.id}-${product.name}`} />
      ))}
    </div>
  )
}

export default ProductsList
