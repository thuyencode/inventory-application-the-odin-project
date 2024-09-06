import { postProduct, putProduct } from '@/client/api/products.api'
import { getCategoriesQueryOptions } from '@/client/queries/categories.queries'
import {
  BrandSchema,
  CategoryIdSchema,
  DescriptionSchema,
  ImageUrlSchema,
  NameSchema,
  PriceSchema,
  SkuSchema,
  StockSchema,
  WeightSchema
} from '@/shared/schemas/submit-product.schema'
import { SubmittedProduct } from '@/shared/types'
import { useForm } from '@tanstack/react-form'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { Link, useRouter } from '@tanstack/react-router'
import { valibotValidator } from '@tanstack/valibot-form-adapter'
import ErrorDialog from './components/error-dialog'
import FieldInfo from './components/field-info'

type ProductFormProps =
  | {
      edit?: false
      product?: never
      productId?: never
    }
  | {
      edit: true
      product: SubmittedProduct
      productId: number
    }

const defaultValues: SubmittedProduct = {
  name: '',
  description: undefined,
  price: 0,
  stock: 0,
  brand: undefined,
  sku: '',
  weight: 0,
  category_id: 0,
  image_url: undefined
}

function ProductForm({
  edit,
  product = defaultValues,
  productId
}: ProductFormProps) {
  const router = useRouter()
  const {
    data: { categories }
  } = useSuspenseQuery(getCategoriesQueryOptions)

  const {
    mutateAsync: submitProduct,
    isPending: isSubmitting,
    isError,
    error
  } = useMutation({
    mutationFn: async (product: SubmittedProduct) =>
      edit ? await putProduct(product, productId) : await postProduct(product),

    onSuccess: async (data) => {
      await router.invalidate()

      await router.navigate({
        to: '/products/$productId',
        params: { productId: String(data.id) }
      })
    }
  })

  const form = useForm<SubmittedProduct>({
    defaultValues: product,
    onSubmit: async ({ value }) => {
      submitProduct(value)
    }
  })

  return (
    <>
      <ErrorDialog isError={isError} error={error} />

      <h3 className='text-center'>{edit ? 'Edit' : 'Add'} a new product</h3>

      <form
        className='grid w-full max-w-lg grid-cols-1 gap-5 md:max-w-3xl md:grid-cols-2'
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <form.Field
          name='name'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: NameSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={`input input-bordered ${field.state.meta.errors.length ? 'input-error' : ''}`}
                name={field.name}
                type='text'
                placeholder='Example: StarBook 7'
                minLength={2}
                maxLength={255}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                required
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='brand'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: BrandSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={`input input-bordered ${field.state.meta.errors.length ? 'input-error' : ''}`}
                name={field.name}
                type='text'
                placeholder='Example: Star Labs'
                minLength={2}
                maxLength={255}
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value === '' ? undefined : e.target.value
                  )
                }
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='description'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: DescriptionSchema
          }}
          children={(field) => (
            <label className='form-control w-full md:col-span-2'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={`input input-bordered ${field.state.meta.errors.length ? 'input-error' : ''}`}
                name={field.name}
                type='text'
                placeholder='Example: Minimalist design. Powerful performance.'
                minLength={10}
                maxLength={500}
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value === '' ? undefined : e.target.value
                  )
                }
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='category_id'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: CategoryIdSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>Category</span>
              </div>

              <select
                className={`input input-bordered ${field.state.value !== 0 ? 'capitalize' : ''}`}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              >
                <option className='normal-case' value={0} disabled>
                  -- Choose a category --
                </option>

                {categories.map((category) => (
                  <option
                    className='capitalize'
                    key={`form_select_category_${category.id}`}
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ))}
              </select>

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='price'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: PriceSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={'${ input input-bordered'}
                name={field.name}
                type='number'
                step={0.01}
                min={0.01}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='weight'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: WeightSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={'${ input input-bordered'}
                name={field.name}
                type='number'
                step={0.1}
                min={0.1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='stock'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: StockSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={'${ input input-bordered'}
                name={field.name}
                type='number'
                min={1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='sku'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: SkuSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text uppercase'>{field.name}</span>
              </div>

              <input
                className={'${ input input-bordered'}
                name={field.name}
                type='text'
                placeholder='Example: MVCFH27F'
                minLength={8}
                maxLength={8}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                required
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <form.Field
          name='image_url'
          validatorAdapter={valibotValidator()}
          validators={{
            onSubmit: ImageUrlSchema
          }}
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>
                  {field.name.replace('_', ' ')}
                </span>
              </div>

              <input
                className={`input input-bordered ${field.state.meta.errors.length ? 'input-error' : ''}`}
                name={field.name}
                type='url'
                maxLength={255}
                placeholder='Example: https://placehold.co/400'
                value={field.state.value ?? ''}
                onBlur={field.handleBlur}
                onChange={(e) =>
                  field.handleChange(
                    e.target.value.length === 0 ? undefined : e.target.value
                  )
                }
              />

              <FieldInfo field={field} />
            </label>
          )}
        />

        <button
          className={`btn btn-primary ${isSubmitting ? 'btn-disabled' : ''}`}
          type='submit'
          disabled={isSubmitting}
        >
          Submit{isSubmitting ? 'ting...' : ''}
        </button>

        <Link
          className={`btn btn-outline btn-error ${isSubmitting ? 'btn-disabled' : ''}`}
          to='/products'
          disabled={isSubmitting}
        >
          Cancel
        </Link>
      </form>
    </>
  )
}

export default ProductForm
