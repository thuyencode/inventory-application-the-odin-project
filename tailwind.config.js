import daisyui from 'daisyui'
import daisyuiThemes from 'daisyui/src/theming/themes'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      gridTemplateColumns: {
        ram: 'repeat(auto-fill, minmax(256px, 1fr))'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyuiThemes['winter']
        },
        dark: {
          ...daisyuiThemes['night']
        }
      }
    ]
  }
}
