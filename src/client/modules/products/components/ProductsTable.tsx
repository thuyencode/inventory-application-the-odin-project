import { Product } from '@/shared/types'

interface ProductsTableProps {
  products: Product[]
}

function ProductsTable({ products }: ProductsTableProps) {
  return (
    <>
      <small className='-my-5 text-center sm:hidden'>
        Showing the products list in card on small screen devices is recommended
      </small>

      <div className='w-full overflow-x-auto'>
        <table className='table-light table table-zebra'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th className='max-sm:hidden'>Category</th>
              <th className='max-sm:hidden'>Brand</th>
              <th>Stock</th>
              <th className='max-sm:hidden'>Price</th>
              <th className='max-sm:hidden'>Weight</th>
              <th className='max-sm:hidden'>SKU</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={`${product.name}-${product.id}`}>
                <th className='table-row-id'>{product.id}</th>
                <th className='capitalize'>{product.name}</th>
                <th className='capitalize max-sm:hidden'>
                  {product.category_name}
                </th>
                <th className='capitalize max-sm:hidden'>{product.brand}</th>
                <th>{product.stock}</th>
                <th className='max-sm:hidden'>${product.price}</th>
                <th className='max-sm:hidden'>{product.weight}</th>
                <th className='max-sm:hidden'>{product.sku}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductsTable
