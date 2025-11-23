import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-auto border-t-2 border-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src={assets.logo} alt="kaif.store" className="h-10" />
            </Link>
            <p className="text-gray-400 text-sm">
              Your trusted destination for quality fashion and lifestyle products. Shop the latest trends with confidence.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Founded by <strong className="text-white">Kaif Khan</strong>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition text-sm">Home</Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-400 hover:text-white transition text-sm">Collection</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition text-sm">Help Center</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">Shipping Info</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">Returns</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition text-sm">Size Guide</a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
            <div className="flex space-x-4 mb-4">
              <img src={assets.razorpay_logo} alt="Razorpay" className="h-8 opacity-75" />
              <img src={assets.stripe_logo} alt="Stripe" className="h-8 opacity-75" />
            </div>
            <p className="text-gray-400 text-sm">
              Secure payment options available
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} kaif.store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

