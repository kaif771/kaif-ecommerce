import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth()
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    if (!isLoaded && retryCount < 3) {
      const timer = setTimeout(() => {
        setRetryCount(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isLoaded, retryCount])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading authentication...</p>
          {retryCount > 0 && <p className="text-sm text-gray-500 mt-2">Attempt {retryCount + 1}</p>}
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
