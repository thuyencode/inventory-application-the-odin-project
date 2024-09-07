import useProductIdForDeletionState from '@/client/state/useProductIdDeletion'
import { ProductsPageComponentProps } from '@/client/types'
import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'

function ProductsTable({
  products
}: Omit<ProductsPageComponentProps, 'display'>) {
  const { setProductIdForDeletion } = useProductIdForDeletionState()

  return (
    <div className='w-full flex-1 overflow-x-auto'>
      <table className='products-table table table-zebra max-md:table-md'>
        <caption className='caption-top sm:hidden'>
          <small>
            Showing the products list in card on small screen devices is
            recommended
          </small>
        </caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Weight</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Added</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className='capitalize'>
          {products.map((product) => (
            <tr key={`${product.name}-${product.id}`} tabIndex={0}>
              <td>{product.id}</td>
              <td>
                <Link
                  className='link-hover link'
                  to='/products/$productId'
                  params={{ productId: String(product.id) }}
                >
                  {product.name}
                </Link>
              </td>
              <td>{product.category_name}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>{product.weight}</td>
              <td>{product.sku}</td>
              <td>{product.stock}</td>
              <td>{product.created_time.toLocaleDateString()}</td>

              <td className='z-50 inline-flex gap-1'>
                <Link
                  className='btn btn-outline btn-secondary btn-sm flex-nowrap gap-1'
                  to='/products/$productId/edit'
                  params={{ productId: String(product.id) }}
                  tabIndex={0}
                >
                  Edit
                  <Icon
                    className='text-lg'
                    icon={'mdi:text-box-edit-outline'}
                  />
                </Link>
                <button
                  className='btn btn-outline btn-error btn-sm flex-nowrap gap-1'
                  onClick={() => {
                    setProductIdForDeletion(product.id)
                  }}
                >
                  Delete
                  <Icon className='text-lg' icon={'mdi:trash-can-outline'} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
