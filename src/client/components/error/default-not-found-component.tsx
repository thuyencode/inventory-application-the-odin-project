import { useNavigate } from '@tanstack/react-router'
import ErrorMessage from './error-message'

function DefaultNotFoundComponent() {
  const navigate = useNavigate()

  function onClick() {
    navigate({ to: '/' })
  }

  return <ErrorMessage status={404} statusText='Not Found' onClick={onClick} />
}

export default DefaultNotFoundComponent
