import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/categories/')({
  component: () => <div>Hello /categories/!</div>
})