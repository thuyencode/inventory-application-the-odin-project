/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldApi } from '@tanstack/react-form'

interface FieldInfoProps {
  field: FieldApi<any, any, any, any>
}

function FieldInfo({ field }: FieldInfoProps) {
  return (
    <div className='label'>
      <span className='label-text-alt'>
        {field.state.meta.isTouched && field.state.meta.errors.length ? (
          <span className='text-error'>
            {field.state.meta.errors.join(',')}
          </span>
        ) : null}

        {field.state.meta.isValidating ? 'Validating...' : null}
      </span>
    </div>
  )
}

export default FieldInfo
