import * as v from 'valibot'

const SelectProductsSchema = v.object({
  limit: v.pipe(v.number(), v.integer(), v.minValue(1)),
  page: v.optional(v.pipe(v.number(), v.integer(), v.minValue(1))),
  sortBy: v.optional(v.picklist(['id', 'price', 'weight', 'stock']), 'id'),
  orderBy: v.optional(v.picklist(['asc', 'desc']), 'asc')
})

const SelectProductsDefaultLimitSchema = v.omit(SelectProductsSchema, ['limit'])

export { SelectProductsDefaultLimitSchema, SelectProductsSchema }
