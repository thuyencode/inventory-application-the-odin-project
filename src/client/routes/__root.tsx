import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext } from '@tanstack/react-router'
import RootLayout from '../components/layout'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  { component: RootLayout }
)
