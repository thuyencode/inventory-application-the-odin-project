import { getProductsQueryFilters } from '@/client/queries/products.queries'
import { ProductsSearchSchema } from '@/client/schemas/products-search.schema'
import { ProductsSearch } from '@/client/types'
import { createFileRoute } from '@tanstack/react-router'
import { valibotSearchValidator } from '@tanstack/router-valibot-adapter'

export const Route = createFileRoute('/products')({
  validateSearch: valibotSearchValidator(ProductsSearchSchema),
  loaderDeps: ({ search }: { search: ProductsSearch }) => search,
  loader: ({ deps, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { display, page = 1, ...filters } = deps
    const { queryClient } = context

    return queryClient.ensureQueryData(
      getProductsQueryFilters({ ...filters, page })
    )
  }
})
