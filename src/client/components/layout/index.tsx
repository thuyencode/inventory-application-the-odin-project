import { Outlet, ScrollRestoration } from '@tanstack/react-router'
import { Suspense } from 'react'
import TanStackRouterDevtools from '../dev-mode-only/TanStackRouterDevtools'
import Footer from './footer'
import Header from './header'

function RootLayout() {
  return (
    <>
      <Header />

      <main className='container my-10 flex flex-col items-center gap-10'>
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

export default RootLayout
