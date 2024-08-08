import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(async () => await import('./App'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
