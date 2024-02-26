import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)
import { Provider } from 'react-redux'

import { store } from './redux/store'
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
