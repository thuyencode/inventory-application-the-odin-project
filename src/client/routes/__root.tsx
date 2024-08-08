import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Header } from '../components/layout'
import TanStackRouterDevtools from '../components/layout/dev-mode-only/TanStackRouterDevtools'

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
