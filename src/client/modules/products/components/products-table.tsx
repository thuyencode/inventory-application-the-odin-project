import { ProductComponentProps } from '@/client/types'

function ProductsTable({ products }: Omit<ProductComponentProps, 'display'>) {
  return (
    <>
      <small className='-my-5 text-center sm:hidden'>
        Showing the products list in card on small screen devices is recommended
      </small>

      <div className='w-full overflow-x-auto'>
        <table className='products-table table table-zebra'>
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
            </tr>
          </thead>
          <tbody className='capitalize'>
            {products.map((product) => (
              <tr key={`${product.name}-${product.id}`}>
                <td tabIndex={0}>{product.id}</td>
                <td tabIndex={0}>{product.name}</td>
                <td tabIndex={0}>{product.category_name}</td>
                <td tabIndex={product.brand ? 0 : -1}>{product.brand}</td>
                <td tabIndex={0}>${product.price}</td>
                <td tabIndex={0}>{product.weight}</td>
                <td tabIndex={0}>{product.sku}</td>
                <td tabIndex={0}>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductsTable
