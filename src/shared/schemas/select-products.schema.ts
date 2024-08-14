import * as v from 'valibot'
import { ORDER_BY, SORT_IN } from '../constants'

const SelectProductsSchema = v.object({
  limit: v.pipe(v.number(), v.integer(), v.minValue(1)),
  page: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1)), 1),
  orderBy: v.optional(v.picklist(ORDER_BY)),
  sortIn: v.optional(v.picklist(SORT_IN))
})

const SelectProductsDefaultLimitSchema = v.omit(SelectProductsSchema, ['limit'])

export { SelectProductsDefaultLimitSchema, SelectProductsSchema }
