import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import TanStackRouterDevtools from '../components/dev-mode-only/TanStackRouterDevtools'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />

      <main className='container'>
        <Outlet />
      </main>

      <Footer />

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  )
})
