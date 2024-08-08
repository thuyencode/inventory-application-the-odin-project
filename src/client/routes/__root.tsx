import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import TanStackRouterDevtools from '../components/dev-mode-only/TanStackRouterDevtools'
import { Header } from '../components/layout'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
})
