import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'

const DEFAULT_TOGGLE_STATE = { name: 'system', icon: 'mdi:computer' }
const LIGHT_TOGGLE_STATE = { name: 'light', icon: 'ph:sun-fill' }
const DARK_TOGGLE_STATE = { name: 'dark', icon: 'ph:moon-fill' }

function ThemeToggle() {
  const [toggleName, setToggleName] = useState(DEFAULT_TOGGLE_STATE)

  useEffect(() => {
    themeChange(false)
  }, [])

  useEffect(() => {
    const theme = localStorage.getItem('theme') as 'light' | 'dark' | null

    switch (theme) {
      case 'light':
        setToggleName(LIGHT_TOGGLE_STATE)
        break

      case 'dark':
        setToggleName(DARK_TOGGLE_STATE)
        break

      default:
        setToggleName(DEFAULT_TOGGLE_STATE)
        break
    }
  }, [])

  return (
    <details className='dropdown-end md:dropdown'>
      <summary className='gap-2 capitalize'>
        <Icon className='text-xl' icon={toggleName.icon} />
        {toggleName.name}
      </summary>

      <ul className='border-base-content/50 md:menu md:dropdown-content md:z-[1] md:w-40 md:rounded-box md:border md:bg-base-300 md:p-2 md:shadow-lg'>
        <li>
          <button
            className='capitalize'
            data-set-theme=''
            data-act-class='ACTIVECLASS'
            onClick={() => {
              setToggleName(DEFAULT_TOGGLE_STATE)
            }}
          >
            <Icon className='text-xl' icon={DEFAULT_TOGGLE_STATE.icon} />
            {DEFAULT_TOGGLE_STATE.name}
          </button>
        </li>
        <li>
          <button
            className='capitalize'
            data-set-theme='dark'
            data-act-class='ACTIVECLASS'
            onClick={() => {
              setToggleName(DARK_TOGGLE_STATE)
            }}
          >
            <Icon className='text-xl' icon={DARK_TOGGLE_STATE.icon} />
            {DARK_TOGGLE_STATE.name}
          </button>
        </li>
        <li>
          <button
            className='capitalize'
            data-set-theme='light'
            data-act-class='ACTIVECLASS'
            onClick={() => {
              setToggleName(LIGHT_TOGGLE_STATE)
            }}
          >
            <Icon className='text-xl' icon={LIGHT_TOGGLE_STATE.icon} />
            {LIGHT_TOGGLE_STATE.name}
          </button>
        </li>
      </ul>
    </details>
  )
}

export default ThemeToggle
