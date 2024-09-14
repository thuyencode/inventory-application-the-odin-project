import { useQueryErrorResetBoundary } from '@tanstack/react-query'
import { useRouter } from '@tanstack/react-router'
import { HTTPError } from 'ky'
import { useEffect } from 'react'
import { ValiError } from 'valibot'
import ErrorMessage from './error-message'

interface DefaultErrorComponentProps {
  error: Error
  reset: () => void
}

function DefaultErrorComponent({ error, reset }: DefaultErrorComponentProps) {
  const router = useRouter()

  const queryErrorResetBoundary = useQueryErrorResetBoundary()

  useEffect(() => {
    queryErrorResetBoundary.reset()
  }, [queryErrorResetBoundary])

  function onClick() {
    reset()
    router.navigate({ to: '/' })
  }

  if (error instanceof ValiError) {
    return (
      <ErrorMessage status={403} statusText={error.message} onClick={onClick} />
    )
  }

  if (error instanceof HTTPError) {
    return (
      <ErrorMessage
        status={error.response.status}
        statusText={error.response.statusText}
        onClick={onClick}
      />
    )
  }

  return (
    <ErrorMessage
      status={error.name}
      statusText={error.message}
      onClick={onClick}
    />
  )
}

export default DefaultErrorComponent
