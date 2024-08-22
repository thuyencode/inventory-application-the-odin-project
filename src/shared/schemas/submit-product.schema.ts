import * as v from 'valibot'

export const NameSchema = v.pipe(v.string(), v.minLength(2), v.maxLength(255))

export const DescriptionSchema = v.nullish(
  v.pipe(v.string(), v.minLength(5), v.maxLength(500))
)

export const PriceSchema = v.pipe(v.number(), v.minValue(0))

export const StockSchema = v.pipe(v.number(), v.integer(), v.minValue(0))

export const BrandSchema = v.nullish(
  v.pipe(v.string(), v.minLength(1), v.maxLength(255))
)

export const SkuSchema = v.pipe(v.string(), v.minLength(2), v.maxLength(255))

export const WeightSchema = v.pipe(v.number(), v.minValue(0.1))

export const ImageUrlSchema = v.nullish(
  v.pipe(v.string(), v.url(), v.maxLength(255))
)

export const CategoryIdSchema = v.pipe(v.number(), v.minValue(1))

export const SubmittedProductSchema = v.pipe(
  v.object({
    name: NameSchema,
    description: DescriptionSchema,
    price: PriceSchema,
    stock: StockSchema,
    brand: BrandSchema,
    sku: SkuSchema,
    weight: WeightSchema,
    image_url: ImageUrlSchema,
    category_id: CategoryIdSchema
  }),
  v.transform((input) => ({
    ...input,
    // `undefined` is not valid in JSON
    description: input.description === undefined ? null : input.description,
    brand: input.brand === undefined ? null : input.brand,
    image_url: input.image_url === undefined ? null : input.image_url
  }))
)
