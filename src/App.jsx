import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ClerkLoaded, ClerkLoading, AuthenticateWithRedirectCallback } from '@clerk/clerk-react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <ClerkLoading>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </div>
      </ClerkLoading>

      <ClerkLoaded>
        <Header />
        <Routes>
          {/* Public routes - no auth required */}
          <Route path="/login/sso-callback" element={<AuthenticateWithRedirectCallback />} />
          <Route path="/signup/sso-callback" element={<AuthenticateWithRedirectCallback />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes - auth required */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/collection" element={<ProtectedRoute><Collection /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='/corder' element={<Order />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </ClerkLoaded>
    </>
  )
}
export default App
