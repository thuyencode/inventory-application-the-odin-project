import { Icon } from '@iconify/react'

interface ErrorMessageProps {
  status: number | string
  statusText: string
  onClick: () => void
}

function ErrorMessage({ status, statusText, onClick }: ErrorMessageProps) {
  return (
    <div className='space-y-5 text-center'>
      <div className='space-y-2.5 text-center'>
        <h1 className='text-error'>{status}</h1>
        <h3 className='pb-2.5 text-info'>{statusText}</h3>
      </div>

      <button className='btn btn-primary gap-1' onClick={onClick}>
        <Icon className='text-lg' icon={'mdi:arrow-left'} />
        Go back home
      </button>
    </div>
  )
}

export default ErrorMessage
