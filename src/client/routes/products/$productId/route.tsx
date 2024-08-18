import { productQuery } from '@/client/queries/products.queries'
import { SelectProductSchema } from '@/shared/schemas/select-product.schema'
import { createFileRoute } from '@tanstack/react-router'
import * as v from 'valibot'

export const Route = createFileRoute('/products/$productId')({
  loader: ({ params, context }) => {
    const productId = v.parse(SelectProductSchema, Number(params.productId))
    const { queryClient } = context

    return queryClient.ensureQueryData(productQuery(productId))
  }
})
