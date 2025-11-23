import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About kaif.store</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Your trusted destination for quality fashion and lifestyle products
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <img 
            src={assets.about_img} 
            alt="About Us" 
            className="w-full h-auto rounded-lg shadow-lg border border-black"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            kaif.store was founded by <strong>Kaif Khan</strong> with a simple mission: to provide high-quality fashion products 
            at affordable prices. We believe that everyone deserves access to stylish, well-made 
            clothing that makes them feel confident and comfortable.
          </p>
          <p className="text-gray-700 mb-4">
            Since our inception, we've been committed to sourcing the best products, maintaining 
            ethical standards, and providing exceptional customer service. Our team works tirelessly 
            to curate collections that reflect the latest trends while ensuring quality and durability.
          </p>
          <p className="text-gray-700">
            We're more than just a store – we're your fashion partner, helping you express your 
            unique style and personality through our carefully selected products.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 border border-black rounded-lg">
          <div className="flex justify-center mb-4">
            <img src={assets.quality_icon} alt="Quality" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black">Quality First</h3>
          <p className="text-gray-700">
            We never compromise on quality. Every product is carefully selected and tested to meet our high standards.
          </p>
        </div>
        <div className="text-center p-6 border border-black rounded-lg">
          <div className="flex justify-center mb-4">
            <img src={assets.support_img} alt="Support" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black">Customer Focus</h3>
          <p className="text-gray-700">
            Your satisfaction is our priority. Our dedicated support team is always ready to help you.
          </p>
        </div>
        <div className="text-center p-6 border border-black rounded-lg">
          <div className="flex justify-center mb-4">
            <img src={assets.exchange_icon} alt="Exchange" className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-black">Easy Returns</h3>
          <p className="text-gray-700">
            Shop with confidence. We offer hassle-free returns and exchanges within 30 days.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center border border-black">
        <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          To democratize fashion by making quality, stylish products accessible to everyone. 
          We strive to create a shopping experience that is enjoyable, convenient, and trustworthy, 
          while maintaining our commitment to sustainability and ethical business practices.
        </p>
        <div className="mt-8">
          <p className="text-gray-600">
            Founded by <strong className="text-black">Kaif Khan</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
