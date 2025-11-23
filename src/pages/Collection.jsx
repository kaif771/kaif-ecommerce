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
  const [filtersOpen, setFiltersOpen] = useState(false)

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

  const handleFilterChange = (type, value) => {
    if (type === 'category') {
      setSelectedCategory(value)
    } else {
      setSelectedSubCategory(value)
    }
  }

  const clearFilters = () => {
    setSelectedCategory('All')
    setSelectedSubCategory('All')
  }

  const activeFiltersCount = (selectedCategory !== 'All' ? 1 : 0) + (selectedSubCategory !== 'All' ? 1 : 0)

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
      {/* Page Header with Filter Button */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2">Our Collection</h1>
            <p className="text-gray-600 text-sm sm:text-base">Discover our wide range of fashion products</p>
          </div>
          
          {/* Filter Toggle Button - Mobile & Tablet */}
          <div className="flex items-center gap-3">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="px-3 sm:px-4 py-2 text-sm sm:text-base border border-black rounded-lg hover:bg-black hover:text-white transition font-medium"
              >
                Clear Filters ({activeFiltersCount})
              </button>
            )}
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden px-4 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-white text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
        {/* Mobile Filter Overlay */}
        {filtersOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden filter-backdrop-enter"
              onClick={() => setFiltersOpen(false)}
            />
            
            {/* Filter Sidebar - Mobile */}
            <aside className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto filter-drawer-enter">
              <div className="p-4 sm:p-6">
                {/* Mobile Filter Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-black">
                  <h2 className="text-xl sm:text-2xl font-bold text-black">Filters</h2>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition border border-black"
                    aria-label="Close filters"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Filter Content */}
                <div className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-bold text-black mb-3 text-base sm:text-lg">Category</h3>
                    <div className="space-y-3">
                      {categories.map((cat) => (
                        <label 
                          key={cat} 
                          className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                        >
                          <input
                            type="radio"
                            name="category"
                            value={cat}
                            checked={selectedCategory === cat}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            className="mr-3 w-4 h-4 accent-black cursor-pointer"
                          />
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{cat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Sub Category Filter */}
                  <div>
                    <h3 className="font-bold text-black mb-3 text-base sm:text-lg">Sub Category</h3>
                    <div className="space-y-3">
                      {subCategories.map((subCat) => (
                        <label 
                          key={subCat} 
                          className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition"
                        >
                          <input
                            type="radio"
                            name="subCategory"
                            value={subCat}
                            checked={selectedSubCategory === subCat}
                            onChange={(e) => handleFilterChange('subCategory', e.target.value)}
                            className="mr-3 w-4 h-4 accent-black cursor-pointer"
                          />
                          <span className="text-gray-700 font-medium text-sm sm:text-base">{subCat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Results Count */}
                  <div className="pt-4 border-t border-black">
                    <p className="text-sm sm:text-base text-gray-600 font-medium">
                      {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                    </p>
                  </div>

                  {/* Apply Button - Mobile */}
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition shadow-lg text-base sm:text-lg"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </aside>
          </>
        )}

        {/* Desktop Filter Sidebar */}
        <aside className="hidden lg:block lg:w-64 shrink-0">
          <div className="bg-white p-6 rounded-lg border border-black shadow-md sticky top-24">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-black">
              <h2 className="text-xl font-bold text-black">Filters</h2>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-gray-600 hover:text-black underline"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-black mb-4 text-base">Category</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <label 
                    key={cat} 
                    className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition group"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={selectedCategory === cat}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="mr-3 w-4 h-4 accent-black cursor-pointer"
                    />
                    <span className="text-gray-700 font-medium group-hover:text-black transition text-sm">
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sub Category Filter */}
            <div className="mb-6">
              <h3 className="font-bold text-black mb-4 text-base">Sub Category</h3>
              <div className="space-y-3">
                {subCategories.map((subCat) => (
                  <label 
                    key={subCat} 
                    className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition group"
                  >
                    <input
                      type="radio"
                      name="subCategory"
                      value={subCat}
                      checked={selectedSubCategory === subCat}
                      onChange={(e) => handleFilterChange('subCategory', e.target.value)}
                      className="mr-3 w-4 h-4 accent-black cursor-pointer"
                    />
                    <span className="text-gray-700 font-medium group-hover:text-black transition text-sm">
                      {subCat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="pt-4 border-t border-black">
              <p className="text-sm text-gray-600 font-medium">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1 w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500 text-base sm:text-lg font-medium">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium text-sm sm:text-base"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collection
