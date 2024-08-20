import * as v from 'valibot'

export const SubmittedProductSchema = v.object({
  name: v.pipe(v.string(), v.minLength(2), v.maxLength(255)),
  description: v.optional(v.pipe(v.string(), v.minLength(5), v.maxLength(500))),
  price: v.pipe(v.number(), v.minValue(0)),
  stock: v.pipe(v.number(), v.integer(), v.minValue(0)),
  brand: v.optional(v.pipe(v.string(), v.minLength(1), v.maxLength(255))),
  sku: v.pipe(v.string(), v.minLength(2), v.maxLength(255)),
  weight: v.pipe(v.number(), v.minValue(0.1)),
  image_url: v.optional(
    v.pipe(v.string(), v.url(), v.minLength(10), v.maxLength(255))
  ),
  category_id: v.pipe(v.number(), v.minValue(1))
})
