import React from 'react'
import { Link } from 'react-router-dom'
import { assets, products } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const Home = () => {
  // Get bestseller products
  const bestsellerProducts = products.filter(p => p.bestseller).slice(0, 8)
  
  // Get featured categories with proper images
  const menProducts = products.filter(p => p.category === 'Men')
  const womenProducts = products.filter(p => p.category === 'Women')
  const kidsProducts = products.filter(p => p.category === 'Kids')
  
  const categories = [
    { 
      name: 'Men', 
      count: menProducts.length, 
      image: menProducts[0]?.image?.[0] || menProducts[1]?.image?.[0] || products[1]?.image?.[0]
    },
    { 
      name: 'Women', 
      count: womenProducts.length, 
      image: womenProducts[0]?.image?.[0] || womenProducts[1]?.image?.[0] || products[0]?.image?.[0]
    },
    { 
      name: 'Kids', 
      count: kidsProducts.length, 
      image: kidsProducts[0]?.image?.[0] || kidsProducts[1]?.image?.[0] || products[2]?.image?.[0]
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative  py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                Fashion That <span className="text-black border-b-4 border-black">Fits</span> Your Style
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Discover the latest trends in fashion. Quality products at affordable prices.
              </p>
              <Link 
                to="/collection"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition shadow-lg border border-white"
              >
                Shop Now
              </Link>
            </div>
            <div className="relative">
              <img 
                src={assets.hero_img} 
                alt="Hero" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                key={index}
                to={`/collection?category=${category.name}`}
                className="group relative overflow-hidden rounded-lg border border-black shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[4/3] relative">
                  {category.image ? (
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full ${category.image ? 'hidden' : 'flex'} items-center justify-center bg-gray-200`}>
                    <span className="text-gray-500">No Image</span>
                  </div>
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition border border-black ">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white font-bold border-black bg-black">
                      <h3 className="text-2xl font-bold mb-2 text-white">{category.name}</h3>
                      <p className="text-sm text-white font-bold">{category.count} Products</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bestseller Products */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Bestseller Products
            </h2>
            <Link 
              to="/collection"
              className="text-black hover:text-gray-700 font-semibold border-b-2 border-black"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-black rounded-lg">
              <div className="flex justify-center mb-4">
                <img src={assets.quality_icon} alt="Quality" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Premium Quality</h3>
              <p className="text-gray-700">We ensure all our products meet the highest quality standards.</p>
            </div>
            <div className="text-center p-6 border border-black rounded-lg">
              <div className="flex justify-center mb-4">
                <img src={assets.exchange_icon} alt="Exchange" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">Easy Returns</h3>
              <p className="text-gray-700">Hassle-free returns and exchanges within 30 days.</p>
            </div>
            <div className="text-center p-6 border border-black rounded-lg">
              <div className="flex justify-center mb-4">
                <img src={assets.support_img} alt="Support" className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black">24/7 Support</h3>
              <p className="text-gray-700">Our customer support team is always here to help you.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
