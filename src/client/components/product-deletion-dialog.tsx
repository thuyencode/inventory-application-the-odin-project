import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { deleteProduct } from '../api/products.api'
import useProductIdForDeletionState from '../state/useProductIdDeletion'

function ProductDeletionDialog() {
  const router = useRouter()
  const queryClient = useQueryClient()
  const ref = useRef<HTMLDialogElement | null>(null)
  const { productIdForDeletion, resetProductIdForDeletion } =
    useProductIdForDeletionState()

  const { mutate: sendDeleteRequest, isPending } = useMutation({
    mutationFn: async (productId: number) => await deleteProduct(productId),
    onSuccess: async () => {
      resetProductIdForDeletion()

      await queryClient.invalidateQueries({ queryKey: ['products'] })
      await router.invalidate()
      await router.navigate({ to: '/products', search: (prev) => prev })
    }
  })

  useEffect(() => {
    if (ref.current === null) {
      return
    }

    if (productIdForDeletion) {
      ref.current.showModal()
    } else {
      ref.current.close()
    }
  }, [productIdForDeletion])

  function handleSubmit() {
    if (productIdForDeletion) {
      sendDeleteRequest(productIdForDeletion)
    }
  }

  return (
    <dialog className='modal' ref={ref} onClose={resetProductIdForDeletion}>
      <div className='modal-box space-y-5 p-0 text-center'>
        <h3 className='border-b border-base-content/20 py-2 text-lg'>
          Delete product #{productIdForDeletion}
        </h3>

        <span className='inline-block px-4 text-sm'>
          To confirm, type the following text in the box below:
          <pre className='text-sm text-error'>
            I know this action is irreversible
          </pre>
        </span>

        <ConfirmationForm
          handleSubmit={handleSubmit}
          onCancel={resetProductIdForDeletion}
          disabled={isPending}
        />
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  )
}

interface ConfirmationFormProps {
  handleSubmit: () => void
  onCancel: () => void
  disabled: boolean
}

function ConfirmationForm({
  handleSubmit,
  onCancel,
  disabled
}: ConfirmationFormProps) {
  const { productIdForDeletion } = useProductIdForDeletionState()
  const [input, setInput] = useState('')

  const CONFIRMATION_PHRASE = 'I know this action is irreversible'

  useEffect(() => {
    if (!productIdForDeletion) {
      setInput('')
    }
  }, [productIdForDeletion])

  return (
    <form
      className='grid grid-cols-2 gap-x-1 gap-y-4 px-4 pb-6'
      onSubmit={(e) => {
        e.preventDefault()

        if (input === CONFIRMATION_PHRASE) {
          handleSubmit()
          setInput('')
        }
      }}
    >
      <input
        className='input input-sm input-bordered col-span-2 w-full text-center'
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        required
      />

      <button
        className={`btn btn-outline btn-error btn-sm h-[35px] ${input !== CONFIRMATION_PHRASE || disabled ? 'btn-disabled' : ''}`}
        type='submit'
      >
        Delete this product
      </button>
      <div
        className='btn btn-outline btn-neutral btn-sm h-[35px]'
        onClick={onCancel}
        role='button'
      >
        Cancel
      </div>
    </form>
  )
}

export default ProductDeletionDialog
