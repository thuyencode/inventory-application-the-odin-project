import { productsPaginationQueryOptions } from '@/client/modules/products/queryOptions/products.query_options'
import { createFileRoute, SearchSchemaInput } from '@tanstack/react-router'

interface ProductSearch {
  page?: number
}

export const Route = createFileRoute('/products')({
  validateSearch: (search: ProductSearch & SearchSchemaInput) => ({
    page: search.page
  }),
  loaderDeps: ({ search }) => ({ page: search.page }),
  loader: ({ deps, context }) => {
    const { page } = deps
    const { queryClient } = context

    return queryClient.ensureQueryData(
      productsPaginationQueryOptions(page ?? 1)
    )
  }
})
