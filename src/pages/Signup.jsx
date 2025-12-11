import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignUp, useAuth , } from '@clerk/clerk-react'

const Signup = () => {
  const { isSignedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [isSignedIn, navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Link to="/" className="text-blue-600 hover:text-blue-500 text-sm font-medium">
            ← Back to Home
          </Link>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <SignUp 
            routing="hash"
            signInUrl="/login"
            fallbackRedirectUrl="/"
            forceRedirectUrl="/"
            appearance={{
              elements: {
                formButtonPrimary: "bg-black text-white hover:bg-gray-800",
                card: "shadow-none"
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Signup
