import { Product } from '@/shared/types'

interface ProductsTableProps {
  products: Product[]
}

function ProductsTable({ products }: ProductsTableProps) {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table-light table table-zebra'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Weight</th>
            <th>SKU</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={`${product.name}-${product.id}`}>
              <th className='table-row-id'>{product.id}</th>
              <th className='capitalize'>{product.name}</th>
              <th className='capitalize'>{product.category_name}</th>
              <th className='capitalize'>{product.brand}</th>
              <th>{product.stock}</th>
              <th>${product.price}</th>
              <th>{product.weight}</th>
              <th>{product.sku}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsTable
