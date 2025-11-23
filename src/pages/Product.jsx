import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { products, assets } from '../assets/assets'
import { useStore } from '../context/StoreContext'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useStore()
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const foundProduct = products.find(p => p._id === id)
    setProduct(foundProduct)
    if (foundProduct && foundProduct.sizes.length > 0) {
      setSelectedSize(foundProduct.sizes[0])
    }
  }, [id])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Product not found</p>
        <Link to="/collection" className="text-black hover:underline mt-4 inline-block border-b border-black">
          Back to Collection
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    addToCart(product, selectedSize, quantity)
    alert(`Added ${quantity} item(s) to cart!`)
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-4">
        <Link to="/collection" className="text-black hover:text-gray-700 border-b border-black">
          ← Back to Collection
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img 
              src={product.image[selectedImage]} 
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          {product.image.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.image.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-black' : 'border-gray-300'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i} 
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon} 
                  alt="star" 
                  className="w-5 h-5"
                />
              ))}
            </div>
            <span className="text-gray-600 ml-2">(4.0) 120 reviews</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">${product.price}</span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Category & Sub Category */}
          <div className="mb-6 flex gap-4">
            <div>
              <span className="text-gray-600">Category: </span>
              <span className="font-semibold">{product.category}</span>
            </div>
            <div>
              <span className="text-gray-600">Type: </span>
              <span className="font-semibold">{product.subCategory}</span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Select Size</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-2 border rounded-lg font-semibold transition ${
                    selectedSize === size
                      ? 'border-black bg-black text-white'
                      : 'border-gray-300 hover:border-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg font-semibold hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition shadow-lg mb-4 border border-black"
          >
            Add to Cart
          </button>

          {/* Features */}
          <div className="border-t pt-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <img src={assets.quality_icon} alt="Quality" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">Premium Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <img src={assets.exchange_icon} alt="Exchange" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">Easy Returns & Exchanges</span>
              </div>
              <div className="flex items-center">
                <img src={assets.support_img} alt="Support" className="w-6 h-6 mr-3" />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
