import { productsPaginationQueryOptions } from '@/client/modules/products/queries/products.queries'
import { DisplayType } from '@/client/modules/products/types'
import { createFileRoute, SearchSchemaInput } from '@tanstack/react-router'

interface ProductSearch {
  page?: number
  display?: DisplayType
}

export const Route = createFileRoute('/products')({
  validateSearch: (search: ProductSearch & SearchSchemaInput) => ({
    page: search.page,
    display: search.display
  }),
  loaderDeps: ({ search }) => ({ page: search.page, display: search.display }),
  loader: ({ deps, context }) => {
    const { page } = deps
    const { queryClient } = context

    return queryClient.ensureQueryData(
      productsPaginationQueryOptions(page ?? 1)
    )
  }
})
