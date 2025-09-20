import React, { useState } from "react";

import ProductData from "../../Data.json";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./useCart";

function Shop() {
  const products = ProductData.Products;
  const navigate = useNavigate();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // Get unique categories and their counts
  const allCategories = [...new Set(products.map((p) => p.Category))];
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.Category] = (acc[product.Category] || 0) + 1;
    return acc;
  }, {});

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page on filter change
  };

  const filteredProducts =
    selectedCategories.length > 0
      ? products.filter((p) => selectedCategories.includes(p.Category))
      : products;

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const { handleAddToCart } = useCart();
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-500 font-semibold">Shop</span>
        </div>
      </div>
      {/* Products */}
      <div className="porduct-wrapper px-[8%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Card */}
        <div className="lg:col-span-3">
          <div className="grid product-wrap grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start justify-between hover:shadow-2xl transition-all duration-300 cursor-pointer"
                key={product.Id}
              >
                <p className="text-sm text-white font-semibold mb-1 bg-red-600 px-3 py-1 rounded">
                  {product.Category}
                </p>
                <Link to={`/product/${product.Id}`}>
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300 mb-4"
                  />
                </Link>
                <Link to={`/product/${product.Id}`}>
                  <h4 className="text-lg font-medium text-yellow-800 hover:underline line-clamp-2 mb-2">
                    {product.Name}
                  </h4>
                </Link>
                <div className="flex mt-5 flex-row items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="mt-1 text-md">
                      <span className="line-through text-gray-400">
                        ${product.OldPrice}
                      </span>{" "}
                      <span className="font-bold text-red-600">
                        ${product.Price}
                      </span>
                    </div>
                  ) : (
                    <div className="text-lg font-semibold mt-1">
                      ${product.Price}
                    </div>
                  )}

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-yellow-400 text-white rounded-full w-[45px] h-[45px] hover:bg-red-500 hover:shadow-xl transition duration-300"
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <nav>
                <ul className="inline-flex -space-x-px">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (number) => (
                      <li key={number}>
                        <button
                          onClick={() => setCurrentPage(number)}
                          className={`px-4 py-2 leading-tight border ${
                            currentPage === number
                              ? "text-white bg-yellow-500 border-yellow-600"
                              : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                          }`}
                        >
                          {number}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          )}
          <ToastContainer position="top-right" autoClose={1500} />
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="flex flex-col">
            <h2 className="border-b top-product pb-2 mb-4 border-yellow-600">
              Filters
            </h2>

            <h1 className="font-bold">Categories</h1>

            <ul className="mt-4 space-y-3">
              {allCategories.map((category) => (
                <li
                  key={category}
                  className="hover:text-yellow-500 transition hover:translate-x-1"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-yellow-400"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category} ({categoryCounts[category] || 0})
                  </label>
                </li>
              ))}
            </ul>

            <h1 className="font-bold mt-8">Colors</h1>

            <ul className="mt-4 space-y-3">
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-400"
                  />
                  Black (56)
                </label>
              </li>
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-400"
                  />
                  Black Leather (12)
                </label>
              </li>
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-400"
                  />
                  Black with red (25)
                </label>
              </li>
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-400"
                  />
                  Gold (35)
                </label>
              </li>
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-yellow-400"
                  />
                  Spacegray (14)
                </label>
              </li>
              <li className="hover:text-yellow-500 transition">
                <label className="flex items-center gap-2 cursor-pointer">
                  + Show More
                </label>
              </li>
            </ul>

            <h2 className="border-b top-product pb-2 mb-4 border-yellow-600 mt-10">
              Latest Products
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 new-small-project">
              {products.slice(1, 5).map((product) => (
                <div
                  key={product.Id}
                  className="bg-white shadow-md rounded-xl p-4 flex  items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
                >
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate(`/product/${product.Id}`)}
                  />
                  <div className="flex flex-col ml-5 w-full">
                    <h4
                      onClick={() => navigate(`/product/${product.Id}`)}
                      className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>

                    <div className="flex mt-5 flex-row items-center justify-between w-full">
                      {product.OldPrice ? (
                        <div className="mt-1 text-md">
                          <span className="line-through text-gray-400">
                            ${product.OldPrice}
                          </span>{" "}
                          <span className="text-red-600 font-bold">
                            ${product.Price}
                          </span>
                        </div>
                      ) : (
                        <div className="text-lg font-semibold mt-1">
                          ${product.Price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
