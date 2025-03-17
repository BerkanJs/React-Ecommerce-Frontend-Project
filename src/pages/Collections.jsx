import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import Hero from "../components/Hero";
import { IoMdClose } from "react-icons/io";

const Collections = () => {
  const { AllProducts, searchButton, setSearchButton } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [currentProducts, setCurrentProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  useEffect(() => {
    let filtered = AllProducts;

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setCurrentProducts(filtered.slice(indexOfFirstProduct, indexOfLastProduct));
  }, [selectedCategory, selectedBrand, AllProducts, currentPage, searchQuery]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedBrand("");
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(
    AllProducts.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory)
        return false;
      if (selectedBrand && product.brand !== selectedBrand) return false;
      return true;
    }).length / productsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mx-auto p-4 flex flex-col items-center justify-center space-y-5">
      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      {searchButton && (
        <div className="p-12 w-full flex space-x-6 items-center justify-center">
          <input
            value={searchQuery}
            placeholder="Search Product"
            className="w-2/3 h-[50px] bg-gray-100 rounded-3xl text-center border-2 border-gray-300 focus:border-[#031444] focus:outline-none"
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <IoMdClose
            onClick={() => setSearchButton(!searchButton)}
            className="bg-gray-200 cursor-pointer rounded-full w-8 h-8"
          />
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full container">
        {/* Filters */}
        <div className="col-span-1">
          <h3 className="text-2xl font-light mb-4">Filters</h3>
          <div className="border p-4 rounded-lg mb-4">
            <h4 className="font-light text-lg mb-2">Categories</h4>
            <form>
              {[
                "Headphones",
                "Laptops",
                "Watches",
                "Printers",
                "Gaming",
                "Monitors",
              ].map((category) => (
                <label key={category} className="block mb-2">
                  <input
                    checked={selectedCategory === category}
                    onChange={handleCategoryChange}
                    name="category"
                    type="radio"
                    value={category}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </form>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-light text-lg mb-2">Brands</h4>
            <form>
              {["Apple", "HP", "Lenovo", "Sony", "Canon"].map((brand) => (
                <label key={brand} className="block mb-2">
                  <input
                    checked={selectedBrand === brand}
                    onChange={handleBrandChange}
                    name="brand"
                    type="radio"
                    value={brand}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </form>
          </div>
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 px-4 py-2 cursor-pointer bg-black text-white rounded-lg hover:bg-gray-600"
          >
            Clear Filters
          </button>
        </div>

        {/* Products */}
        <div className="col-span-3 w-full flex flex-col justify-between">
          <h3 className="text-3xl font-light mb-16">ALL PRODUCTS</h3>

          {currentProducts.length === 0 ? (
            <p className="text-center text-black-500 text-xl">
              Aranan ürün bulunamadı.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {currentProducts.map((data) => (
                <div key={data.id} className="h-full flex flex-col">
                  <ProductCard
                    img={data.img}
                    name={data.name}
                    price={data.price}
                    id={data.id}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              {[...Array(totalPages).keys()].map((number) => (
                <button
                  key={number + 1}
                  onClick={() => paginate(number + 1)}
                  className={`px-4 py-2 mx-1 rounded-lg transition duration-300 ease-in-out ${
                    currentPage === number + 1
                      ? "bg-black text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {number + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
