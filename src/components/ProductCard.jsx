import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="group">
      <div className="bg-white rounded-lg border border-black overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square border-b border-black">
          <img 
            src={product.image[0]} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.bestseller && (
            <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded border-2 border-white font-bold">
              Bestseller
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-black mb-2 line-clamp-2 group-hover:text-gray-700 transition">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i} 
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon} 
                  alt="star" 
                  className="w-4 h-4"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">(4.0)</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between border-t border-black pt-2">
            <span className="text-xl font-bold text-black">${product.price}</span>
            <span className="text-sm text-gray-600 font-semibold">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

