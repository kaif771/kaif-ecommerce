import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useStore } from '../context/StoreContext'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { getCartCount } = useStore()

  return (
    <header className="bg-white border-b border-black sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={assets.logo} alt="kaif.store" className="h-10 sm:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Home</Link>
            <Link to="/collection" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Collection</Link>
            <Link to="/about" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">About</Link>
            <Link to="/contact" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Contact</Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full transition border border-black"
            >
              <img src={assets.search_icon} alt="Search" className="w-5 h-5" />
            </button>

            {/* Profile */}
            <Link to="/login" className="p-2 rounded-full transition border border-black">
              <img src={assets.profile_icon} alt="Profile" className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 rounded-full transition border border-black">
              <img src={assets.cart_icon} alt="Cart" className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">{getCartCount()}</span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full transition border border-black"
            >
              <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <div className="flex items-center border border-black rounded-lg px-4 py-2 bg-white">
              <img src={assets.search_icon} alt="Search" className="w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 outline-none bg-transparent text-black"
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-black">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link to="/" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Home</Link>
              <Link to="/collection" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Collection</Link>
              <Link to="/about" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">About</Link>
              <Link to="/contact" className="text-black hover:text-gray-600 font-medium transition border-b border-transparent hover:border-black">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

