import { Icon } from '@iconify/react'
import { Link, useLoaderData } from '@tanstack/react-router'

function ProductPage() {
  const product = useLoaderData({ from: '/products/$productId' })

  return (
    <>
      <Link
        className='icon-wrapper link-hover link link-info self-start'
        to='/products'
      >
        <Icon className='text-xl' icon={'mdi:arrow-left-thin-circle-outline'} />
        Previous
      </Link>

      <div className='card w-full rounded-none md:card-side max-md:gap-10'>
        <figure>
          <img
            className='w-full !max-w-96 self-start rounded'
            src={
              product.image_url ??
              'https://dummyjson.com/image/400?text=No+Image&fontFamily=quicksand'
            }
            loading='lazy'
            decoding='async'
          />
        </figure>

        <div className='card-body flex-1 gap-5 py-0 pr-0 font-light max-md:p-0'>
          <div className='card-actions flex-col'>
            <p className='capitalize'>
              <span className='font-medium'>Name:</span> {product.name}
            </p>
            <p>
              <span className='font-medium'>Price:</span> ${product.price}
            </p>
            <p className='capitalize'>
              <span className='font-medium'>Category:</span>{' '}
              {product.category_name}
            </p>
            <p>
              <span className='font-medium'>Brand:</span> {product.brand}
            </p>
            <p>
              <span className='font-medium'>Stock:</span> {product.stock}
            </p>
            <p>
              <span className='font-medium'>Weight:</span> {product.weight}
            </p>
            <p>
              <span className='font-medium'>SKU:</span> {product.sku}
            </p>
            <p>
              <span className='font-medium'>Added at:</span>{' '}
              {product.created_time.toLocaleString()}
            </p>
            <p>
              <span className='font-medium'>Description:</span>{' '}
              <span className='first-letter:uppercase'>
                {product.description}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
