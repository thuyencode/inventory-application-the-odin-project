import { getProductById, getProducts } from '@/client/api/products.api'
import { SelectProductsDefaultLimitOptions } from '@/shared/types'
import { queryOptions } from '@tanstack/react-query'

export const productsQueryFilters = (
  filters: SelectProductsDefaultLimitOptions
) =>
  queryOptions({
    queryKey: ['products', filters],
    queryFn: async ({ signal }) => {
      const data = await getProducts(signal, filters)

      return {
        ...data,
        products: data.products.map((product) => ({
          ...product,
          created_time: new Date(product.created_time)
        }))
      }
    }
  })

export const productQuery = (productId: number) =>
  queryOptions({
    queryKey: ['products', productId],
    queryFn: async ({ signal }) => {
      const data = await getProductById(productId, signal)

      return { ...data, created_time: new Date(data.created_time) }
    }
  })
