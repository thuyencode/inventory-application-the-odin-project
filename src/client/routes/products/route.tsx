import { ProductsSearchSchema } from '@/client/modules/products/schemas/products-search.schema'
import { productsQueryFilters } from '@/client/queries/products.queries'
import { ProductsSearch } from '@/client/types'
import { createFileRoute, SearchSchemaInput } from '@tanstack/react-router'
import * as v from 'valibot'

export const Route = createFileRoute('/products')({
  validateSearch: (search: ProductsSearch & SearchSchemaInput) =>
    v.parse(ProductsSearchSchema, search),
  loaderDeps: ({ search }) => search,
  loader: ({ deps, context }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { display, page = 1, ...filters } = deps
    const { queryClient } = context

    return queryClient.ensureQueryData(
      productsQueryFilters({ ...filters, page })
    )
  }
})
