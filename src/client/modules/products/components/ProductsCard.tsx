import { Product } from '@/shared/types'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='card card-bordered tooltip card-compact tooltip-info max-w-64 bg-base-300 shadow-lg'>
      <figure>
        <img
          className='aspect-square object-cover object-top duration-300 hover:scale-105'
          src={product.image_url}
          alt={product.name}
          loading='lazy'
          decoding='async'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{product.name}</h2>
        <p>{product.description}</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>{product.category_name}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
