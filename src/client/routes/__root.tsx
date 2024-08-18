import { QueryClient } from '@tanstack/react-query'
import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration
} from '@tanstack/react-router'
import { Suspense } from 'react'
import TanStackRouterDevtools from '../components/dev-mode-only/TanStackRouterDevtools'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    component: () => (
      <>
        <Header />

        <main className='container my-10 flex flex-col items-center gap-10 max-sm:p-5'>
          <Outlet />
        </main>

        <Footer />

        <ScrollRestoration />

        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </>
    )
  }
)
