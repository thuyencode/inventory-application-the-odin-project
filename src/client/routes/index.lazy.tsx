import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '../modules/home/HomePage'

export const Route = createLazyFileRoute('/')({
  component: HomePage
})
