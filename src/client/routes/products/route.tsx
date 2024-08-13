import { productsQueryFilters } from '@/client/modules/products/queries/products.queries'
import { ProductSearchSchema } from '@/client/modules/products/schemas/product-search.schema'
import { ProductSearch } from '@/client/types'
import { createFileRoute, SearchSchemaInput } from '@tanstack/react-router'
import * as v from 'valibot'

export const Route = createFileRoute('/products')({
  validateSearch: (search: ProductSearch & SearchSchemaInput) => ({
    ...search
  }),
  loaderDeps: ({ search }) => ({ ...search }),
  loader: ({ deps, context }) => {
    const filters = v.parse(ProductSearchSchema, deps)
    const { queryClient } = context

    return queryClient.ensureQueryData(productsQueryFilters(filters))
  }
})
