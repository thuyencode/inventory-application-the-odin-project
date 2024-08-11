import {
  getProductById,
  getProducts,
  getProductsPagination
} from '@/client/api/products.api'
import { queryOptions } from '@tanstack/react-query'

export const productsQueryOptions = queryOptions({
  queryKey: ['products'],
  queryFn: async ({ signal }) => await getProducts(signal)
})

export const productsPaginationQueryOptions = (page: number) =>
  queryOptions({
    queryKey: ['products', { page }],
    queryFn: async ({ signal }) => await getProductsPagination(page, signal)
  })

export const productQueryOptions = (productId: number) =>
  queryOptions({
    queryKey: ['products', productId],
    queryFn: async ({ signal }) => await getProductById(productId, signal)
  })
