import { QueryKey, useQuery, useQueryClient } from '@tanstack/react-query'

function createGlobalState<T>(
  queryKey: QueryKey,
  initialData: T | null = null
) {
  return function () {
    const queryClient = useQueryClient()

    const { data } = useQuery({
      // eslint-disable-next-line @tanstack/query/exhaustive-deps
      queryKey,
      queryFn: () => Promise.resolve(initialData),
      refetchInterval: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false
    })

    function setData(data: Partial<T>) {
      queryClient.setQueryData(queryKey, data)
    }

    function resetData() {
      queryClient.invalidateQueries({ queryKey })

      queryClient.refetchQueries({ queryKey })
    }

    return { data, setData, resetData }
  }
}

export default createGlobalState
