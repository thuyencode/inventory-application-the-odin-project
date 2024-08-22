import { productQuery } from '@/client/queries/products.queries'
import { createFileRoute } from '@tanstack/react-router'
import * as v from 'valibot'

const SelectProductSchema = v.pipe(v.number(), v.integer(), v.minValue(1))

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params, context }) => {
    const productId = v.parse(SelectProductSchema, Number(params.productId))
    const { queryClient } = context

    return queryClient.ensureQueryData(productQuery(productId))
  }
})
