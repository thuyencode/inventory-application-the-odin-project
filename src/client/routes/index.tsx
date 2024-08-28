import { createFileRoute } from '@tanstack/react-router'
import { categoriesQuery } from '../queries/categories.queries'

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(categoriesQuery())
})
