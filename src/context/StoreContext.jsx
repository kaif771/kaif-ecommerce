import React, { createContext, useContext, useState, useEffect } from 'react'

const StoreContext = createContext()

export const useStore = () => {
  const context = useContext(StoreContext)
  if (!context) {
    throw new Error('useStore must be used within StoreProvider')
  }
  return context
}

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('kaifStoreCart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
    const savedUser = localStorage.getItem('kaifStoreUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kaifStoreCart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, size, quantity = 1) => {
    const existingItem = cartItems.find(
      item => item._id === product._id && item.size === size
    )

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item._id === product._id && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ))
    } else {
      setCartItems([...cartItems, {
        ...product,
        size,
        quantity,
        cartId: `${product._id}_${size}_${Date.now()}`
      }])
    }
  }

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId))
  }

  const updateCartQuantity = (cartId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(cartId)
    } else {
      setCartItems(cartItems.map(item =>
        item.cartId === cartId ? { ...item, quantity } : item
      ))
    }
  }

  const clearCart = () => {
    setCartItems([])
  }

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('kaifStoreUser', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('kaifStoreUser')
  }

  const getCartCount = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getCartTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    getCartCount,
    getCartTotal,
    user,
    login,
    logout
  }

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  )
}

