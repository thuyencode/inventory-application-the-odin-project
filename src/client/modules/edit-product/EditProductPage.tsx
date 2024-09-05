import ProductForm from '@/client/components/product-form/ProductForm'
import { queryGetProduct } from '@/client/queries/products.queries'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

function EditProductPage() {
  const { productId } = useParams({ from: '/products/$productId/edit' })
  const { data: product } = useSuspenseQuery(queryGetProduct(Number(productId)))

  return <ProductForm edit product={product} productId={Number(productId)} />
}

export default EditProductPage
