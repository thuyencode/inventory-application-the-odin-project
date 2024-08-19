import { Product } from '@/shared/types'
import { useForm } from '@tanstack/react-form'
import { useLoaderData } from '@tanstack/react-router'

function AddNewProductPage() {
  const { categories } = useLoaderData({ from: '/products/new' })

  const form = useForm<Omit<Product, 'category_name' | 'id' | 'created_time'>>({
    defaultValues: {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      brand: '',
      sku: '',
      weight: 0,
      category_id: 1,
      image_url: ''
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
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
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='text'
                placeholder='Example: StarBook 7'
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                required
              />
            </label>
          )}
        />

        <form.Field
          name='description'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='text'
                placeholder='Example: Minimalist design. Powerful performance.'
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                required
              />
            </label>
          )}
        />

        <form.Field
          name='category_id'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>Category</span>
              </div>

              <select
                className='input input-bordered capitalize'
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              >
                {categories.map((category) => (
                  <option
                    value={category.id}
                    key={`form_select_category_${category.id}`}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
          )}
        />

        <form.Field
          name='price'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='number'
                step={0.1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />
            </label>
          )}
        />

        <form.Field
          name='weight'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='number'
                step={0.1}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />
            </label>
          )}
        />

        <form.Field
          name='stock'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='number'
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(Number(e.target.value))}
                required
              />
            </label>
          )}
        />

        <form.Field
          name='sku'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text uppercase'>{field.name}</span>
              </div>

              <input
                className='input input-bordered'
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
            </label>
          )}
        />

        <form.Field
          name='image_url'
          children={(field) => (
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text capitalize'>
                  {field.name.replace('_', ' ')}
                </span>
              </div>

              <input
                className='input input-bordered'
                name={field.name}
                type='url'
                placeholder='Example: https://placehold.co/400'
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                required
              />
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

export default AddNewProductPage
