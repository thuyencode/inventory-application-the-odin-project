import { getCategoriesQueryOptions } from '@/client/queries/categories.queries'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/categories')({
  loader: ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(getCategoriesQueryOptions)
  }
})
