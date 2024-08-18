import * as v from 'valibot'

export const SelectProductSchema = v.pipe(
  v.number(),
  v.integer(),
  v.minValue(1)
)
