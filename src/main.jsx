import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from './context/StoreContext'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  console.error('Missing VITE_CLERK_PUBLISHABLE_KEY environment variable')
  throw new Error(
    'Missing Publishable Key. Add VITE_CLERK_PUBLISHABLE_KEY to your environment variables. ' +
    'For Vercel: Go to Settings → Environment Variables and add VITE_CLERK_PUBLISHABLE_KEY'
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={publishableKey}>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
