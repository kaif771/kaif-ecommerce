import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useStore } from '../context/StoreContext'

const Cart = () => {
  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal } = useStore()

  const handleRemoveItem = (cartId) => {
    removeFromCart(cartId)
  }

  const handleQuantityChange = (cartId, newQuantity) => {
    updateCartQuantity(cartId, newQuantity)
  }

  const subtotal = getCartTotal()
  const shipping = subtotal > 0 ? 10 : 0
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <img src={assets.cart_icon} alt="Empty Cart" className="w-24 h-24 mx-auto mb-4 opacity-50" />
          <p className="text-gray-500 text-lg mb-4">Your cart is empty</p>
          <Link 
            to="/collection"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {cartItems.map((item) => (
                <div key={item.cartId} className="flex flex-col sm:flex-row gap-4 pb-6 mb-6 border-b border-black last:border-b-0 last:pb-0 last:mb-0">
                  <img 
                    src={item.image[0]} 
                    alt={item.name}
                    className="w-full sm:w-32 h-32 object-cover rounded-lg border border-black"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-black">{item.name}</h3>
                    <p className="text-gray-600 mb-2">Size: {item.size}</p>
                    <p className="text-gray-600 mb-4">${item.price}</p>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.cartId, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 border border-black rounded font-semibold hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.cartId, item.quantity + 1)}
                          className="w-8 h-8 border border-black rounded font-semibold hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.cartId)}
                        className="flex items-center text-red-600 hover:text-red-700"
                      >
                        <img src={assets.bin_icon} alt="Remove" className="w-5 h-5 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-black">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-black pt-4 flex justify-between text-lg">
                  <span className="font-bold text-black">Total</span>
                  <span className="font-bold text-black">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/placeorder"
                className="block w-full bg-black text-white py-4 rounded-lg font-semibold text-center hover:bg-gray-800 transition mb-4 border border-black"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/collection"
                className="block w-full text-center text-black hover:text-gray-700 font-semibold border-b border-black"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
