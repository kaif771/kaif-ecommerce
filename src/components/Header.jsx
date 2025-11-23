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
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={assets.logo} 
              alt="kaif.store" 
              className="h-8 sm:h-10 md:h-12 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-none" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link 
              to="/" 
              className="text-black hover:text-gray-600 font-medium transition border-b-2 border-transparent hover:border-black text-sm lg:text-base py-1"
            >
              Home
            </Link>
            <Link 
              to="/collection" 
              className="text-black hover:text-gray-600 font-medium transition border-b-2 border-transparent hover:border-black text-sm lg:text-base py-1"
            >
              Collection
            </Link>
            <Link 
              to="/about" 
              className="text-black hover:text-gray-600 font-medium transition border-b-2 border-transparent hover:border-black text-sm lg:text-base py-1"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-black hover:text-gray-600 font-medium transition border-b-2 border-transparent hover:border-black text-sm lg:text-base py-1"
            >
              Contact
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {/* Search */}
            <button 
              onClick={() => {
                setSearchOpen(!searchOpen)
                if (!searchOpen) setMenuOpen(false)
              }}
              className="p-2 sm:p-2.5 rounded-lg transition-all border border-black hover:bg-black hover:text-white active:scale-95"
              aria-label="Search"
            >
              <img src={assets.search_icon} alt="Search" className="w-5 h-5 sm:w-5 md:w-6" />
            </button>

            {/* Profile */}
            <Link 
              to="/login" 
              className="p-2 sm:p-2.5 rounded-lg transition-all border border-black hover:bg-black hover:text-white active:scale-95" 
              aria-label="Profile"
            >
              <img src={assets.profile_icon} alt="Profile" className="w-5 h-5 sm:w-5 md:w-6" />
            </Link>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="relative p-2 sm:p-2.5 rounded-lg transition-all border border-black hover:bg-black hover:text-white active:scale-95" 
              aria-label="Cart"
            >
              <img src={assets.cart_icon} alt="Cart" className="w-5 h-5 sm:w-5 md:w-6" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex items-center justify-center border-2 border-white shadow-md">
                  {getCartCount() > 99 ? '99+' : getCartCount()}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => {
                setMenuOpen(!menuOpen)
                if (!menuOpen) setSearchOpen(false)
              }}
              className="md:hidden p-2 sm:p-2.5 rounded-lg transition-all border border-black hover:bg-black hover:text-white active:scale-95"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-3 sm:pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex items-center border border-black rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 bg-white shadow-sm">
              <img src={assets.search_icon} alt="Search" className="w-5 h-5 sm:w-5 mr-2 shrink-0" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="flex-1 outline-none bg-transparent text-black text-sm sm:text-base placeholder:text-gray-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="ml-2 text-gray-500 hover:text-black text-sm font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-black animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col pt-4">
              <Link 
                to="/" 
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-gray-600 font-medium transition-all border-l-4 border-transparent hover:border-black hover:bg-gray-50 text-base sm:text-lg py-3 px-4 rounded-r-lg"
              >
                Home
              </Link>
              <Link 
                to="/collection" 
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-gray-600 font-medium transition-all border-l-4 border-transparent hover:border-black hover:bg-gray-50 text-base sm:text-lg py-3 px-4 rounded-r-lg"
              >
                Collection
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-gray-600 font-medium transition-all border-l-4 border-transparent hover:border-black hover:bg-gray-50 text-base sm:text-lg py-3 px-4 rounded-r-lg"
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setMenuOpen(false)}
                className="text-black hover:text-gray-600 font-medium transition-all border-l-4 border-transparent hover:border-black hover:bg-gray-50 text-base sm:text-lg py-3 px-4 rounded-r-lg"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
