import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Contact Us</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-black shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">Send us a Message</h2>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-black font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-white text-black"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-black font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-white text-black"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-black font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-white text-black"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-black font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-white text-black resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition border border-black shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-white rounded-lg border border-black shadow-lg p-6 md:p-8 mb-6">
            <img 
              src={assets.contact_img} 
              alt="Contact" 
              className="w-full h-auto rounded-lg mb-6 border border-black"
            />
            <h2 className="text-2xl font-bold text-black mb-6 border-b border-black pb-3">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start p-4 border border-black rounded-lg hover:bg-gray-50 transition">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-black">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-black mb-1">Email</h3>
                  <a href="mailto:kaifkhan51371@gmail.com" className="text-gray-700 hover:text-black transition break-all">
                    kaifkhan51371@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 border border-black rounded-lg hover:bg-gray-50 transition">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-black">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-black mb-1">Phone</h3>
                  <a href="tel:+917506860428" className="text-gray-700 hover:text-black transition">+91 7506860428</a>
                </div>
              </div>

              <div className="flex items-start p-4 border border-black rounded-lg hover:bg-gray-50 transition">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-black">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-bold text-black mb-1">Address</h3>
                  <p className="text-gray-700">123 Fashion Street, City, State 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-black p-6 shadow-lg">
            <h3 className="font-bold text-black mb-4 text-lg border-b border-black pb-2">Business Hours</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-semibold">Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-300">
                <span className="font-semibold">Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold">Sunday</span>
                <span className="text-gray-500">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
