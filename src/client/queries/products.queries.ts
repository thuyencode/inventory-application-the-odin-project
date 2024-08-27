import { getProductById, getProducts } from '@/client/api/products.api'
import { SelectProductsDefaultLimitOptions } from '@/shared/types'
import { queryOptions } from '@tanstack/react-query'

export const getProductsQueryFilters = (
  filters: SelectProductsDefaultLimitOptions
) =>
  queryOptions({
    queryKey: ['products', filters],
    queryFn: async ({ signal }) => await getProducts(signal, filters)
  })

export const getProductQuery = (productId: number) =>
  queryOptions({
    queryKey: ['products', productId],
    queryFn: async ({ signal }) => await getProductById(productId, signal)
  })
