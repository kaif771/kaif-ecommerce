import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const Collection = () => {
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || 'All')
  const [selectedSubCategory, setSelectedSubCategory] = useState('All')

  useEffect(() => {
    let filtered = products

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    if (selectedSubCategory !== 'All') {
      filtered = filtered.filter(p => p.subCategory === selectedSubCategory)
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedSubCategory])

  const categories = ['All', 'Men', 'Women', 'Kids']
  const subCategories = ['All', 'Topwear', 'Bottomwear', 'Winterwear']

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Collection</h1>
        <p className="text-gray-600">Discover our wide range of fashion products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Category</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sub Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Sub Category</h3>
              <div className="space-y-2">
                {subCategories.map((subCat) => (
                  <label key={subCat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="subCategory"
                      value={subCat}
                      checked={selectedSubCategory === subCat}
                      onChange={(e) => setSelectedSubCategory(e.target.value)}
                      className="mr-2"
                    />
                    <span className="text-gray-700">{subCat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="pt-4 border-t">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection
