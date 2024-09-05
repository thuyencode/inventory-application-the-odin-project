import { Product } from '@/shared/types'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import { capitalize } from '../utils'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      className='product-card card card-bordered tooltip card-compact h-min w-full rounded-sm border border-base-content/20 bg-base-300 shadow-lg'
      to='/products/$productId'
      params={{ productId: String(product.id) }}
      data-tip={capitalize(product.name)}
      tabIndex={0}
    >
      <figure className='!justify-between gap-5 border-b border-base-content/20 p-5 py-3'>
        <img
          className='aspect-square w-24 rounded-sm object-cover object-top duration-300 hover:scale-110'
          src={
            product.image_url ??
            'https://dummyjson.com/image/400?text=No+Image&fontFamily=quicksand'
          }
          alt={product.name}
          loading='lazy'
          decoding='async'
        />

        <figcaption className='flex flex-col items-end'>
          <span className='text-wrap text-end'>{product.name}</span>
          <span className='font-light'>${product.price}</span>
        </figcaption>
      </figure>

      <div className='card-body bg-base-200 !p-0'>
        <table className='mx-5 my-3'>
          <tbody className='capitalize'>
            <tr>
              <th>Category</th>
              <td>{product.category_name}</td>
            </tr>
            <tr>
              <th>Brand</th>
              <td>{product.brand}</td>
            </tr>
            <tr>
              <th>Stock</th>
              <td>{product.stock}</td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <th>SKU</th>
              <td>{product.sku}</td>
            </tr>
            <tr>
              <th>Added</th>
              <td>{product.created_time.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <div className='card-actions z-10 justify-end border-t border-base-content/20 px-5 py-3'>
          <Link
            className='btn btn-secondary btn-sm gap-1'
            to='/products/$productId/edit'
            params={{ productId: String(product.id) }}
          >
            Edit
            <Icon className='text-lg' icon={'mdi:text-box-edit-outline'} />
          </Link>

          <button className='btn btn-error btn-sm gap-1'>
            Delete
            <Icon className='text-lg' icon={'mdi:trash-can-outline'} />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
