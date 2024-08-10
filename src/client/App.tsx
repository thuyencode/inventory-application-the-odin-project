import { createRouter, RouterProvider } from '@tanstack/react-router'
import { useEffect } from 'react'
import { getCategoryById } from './api/categories'
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  useEffect(() => {
    getCategoryById(1).then((res) => {
      console.log(res)
    })
  }, [])

  return <RouterProvider router={router} />
}

export default App
