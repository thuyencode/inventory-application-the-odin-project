import { getProductQueryOptions } from '@/client/queries/products.queries'
import { ProductIdSchema } from '@/client/schemas/product-id.schema'
import { createFileRoute } from '@tanstack/react-router'
import * as v from 'valibot'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params, context }) => {
    const productId = v.parse(ProductIdSchema, Number(params.productId))
    const { queryClient } = context

    queryClient.ensureQueryData(getProductQueryOptions(productId))
  }
})
