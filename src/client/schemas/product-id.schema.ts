import * as v from 'valibot'

export const ProductIdSchema = v.pipe(v.number(), v.integer(), v.minValue(1))
