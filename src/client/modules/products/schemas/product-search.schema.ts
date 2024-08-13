import { SelectProductsDefaultLimitSchema } from '@/shared/schemas/select-products.schema'
import * as v from 'valibot'
import { DISPLAY_TYPE } from '../constants'

export const ProductSearchSchema = v.intersect([
  v.object({ display: v.optional(v.picklist(DISPLAY_TYPE), 'card') }),
  SelectProductsDefaultLimitSchema
])
