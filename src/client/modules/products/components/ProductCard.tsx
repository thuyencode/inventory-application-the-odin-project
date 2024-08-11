import { Product } from '@/shared/types'
import { capitalize } from '../utils'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      className='card card-bordered tooltip card-compact w-full rounded-sm border border-base-content/20 bg-base-300 shadow-lg'
      data-tip={capitalize(product.name)}
    >
      <figure className='!justify-between gap-5 border-b border-base-content/20 p-5 py-3'>
        <img
          className='aspect-square w-24 rounded-sm object-cover object-top duration-300 hover:scale-110'
          src={product.image_url}
          alt={product.name}
          loading='lazy'
          decoding='async'
        />
        <figcaption className='truncate font-medium'>{product.name}</figcaption>
      </figure>

      <div className='card-body bg-base-200 !py-2'>
        <table>
          <tr>
            <th className='text-start font-normal'>Category</th>
            <td className='text-end font-medium capitalize'>
              {product.category_name}
            </td>
          </tr>
          <tr>
            <th className='text-start font-normal'>Brand</th>
            <td className='text-end font-medium capitalize'>{product.brand}</td>
          </tr>
          <tr>
            <th className='text-start font-normal'>Stock</th>
            <td className='text-end font-medium'>{product.stock}</td>
          </tr>
          <tr>
            <th className='text-start font-normal'>Price</th>
            <td className='text-end font-medium'>${product.price}</td>
          </tr>
          <tr>
            <th className='text-start font-normal'>Weight</th>
            <td className='text-end font-medium'>{product.weight}</td>
          </tr>
          <tr>
            <th className='text-start font-normal'>SKU</th>
            <td className='text-end font-medium'>{product.sku}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default ProductCard
