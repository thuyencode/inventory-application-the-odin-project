import { createFileRoute } from '@tanstack/react-router'
import { queryGetCategories } from '../queries/categories.queries'

export const Route = createFileRoute('/')({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(queryGetCategories)
})
