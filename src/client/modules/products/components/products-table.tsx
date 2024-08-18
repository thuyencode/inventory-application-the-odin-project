import { ProductsPageComponentProps } from '@/client/types'

function ProductsTable({
  products
}: Omit<ProductsPageComponentProps, 'display'>) {
  return (
    <div className='w-full overflow-x-auto'>
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
          </tr>
        </thead>
        <tbody className='capitalize'>
          {products.map((product) => (
            <tr key={`${product.name}-${product.id}`} tabIndex={0}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category_name}</td>
              <td>{product.brand}</td>
              <td>${product.price}</td>
              <td>{product.weight}</td>
              <td>{product.sku}</td>
              <td>{product.stock}</td>
              <td>{product.created_time.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
