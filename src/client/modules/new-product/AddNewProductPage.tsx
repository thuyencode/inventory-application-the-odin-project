import {
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
import { FieldApi, useForm } from '@tanstack/react-form'
import { useLoaderData, useRouter } from '@tanstack/react-router'
import { valibotValidator } from '@tanstack/valibot-form-adapter'

function AddNewProductPage() {
  const router = useRouter()
  const { categories } = useLoaderData({ from: '/products/new' })

  const form = useForm<SubmittedProduct>({
    defaultValues: {
      name: '',
      description: undefined,
      price: 0,
      stock: 0,
      brand: undefined,
      sku: '',
      weight: 0,
      category_id: 0,
      image_url: undefined
    },
    onSubmit: async ({ value }) => {
      console.log(value)

      router.invalidate()
    }
  })

  return (
    <>
      <h3 className='text-center'>Add new product</h3>
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
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
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
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className={`input input-bordered ${field.state.meta.errors.length ? 'input-error' : ''}`}
                name={field.name}
                type='text'
                placeholder='Example: Minimalist design. Powerful performance.'
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
                step={0.1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
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
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
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
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
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

        <button className='btn btn-primary' type='submit'>
          Submit
        </button>

        <button className='btn btn-outline btn-error'>Cancel</button>
      </form>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <div className='label'>
          <span className='label-text-alt text-error'>
            {field.state.meta.errors.join(',')}
          </span>
        </div>
      ) : null}

      {field.state.meta.isValidating ? 'Validating...' : null}
    </>
  )
}

export default AddNewProductPage
