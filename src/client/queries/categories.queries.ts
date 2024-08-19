import { queryOptions } from '@tanstack/react-query'
import { getCategories } from '../api/categories.api'

export const categoriesQuery = () =>
  queryOptions({
    queryKey: ['categories'],
    queryFn: async ({ signal }) => await getCategories(signal)
  })
