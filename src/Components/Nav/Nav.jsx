import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductData from "../../Data.json";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [open, setOpen] = useState(false);
  const categories = [
    ["Smartphones", "📱"],
    ["Laptop", "💻"],
    ["Camera", "📷"],
    ["Headphones", "🎧"],
    ["PC Gaming", "🎮"],
    ["Tablets", "📱"],
    ["Television", "📺"],
  ];

  const navigate = useNavigate();
  const products = ProductData.Products;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.Name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(filteredProducts);
    setShowResults(true);
  };

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchTerm("");
    setSearchResults([]);
    setShowResults(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchContainerRef]);

  return (
    <>
      <nav className="w-full flex flex-col justify-center items-center relative">
        {/* Top Bar */}
        <div className="top-nav w-full flex justify-between items-center bg-black text-white px-[8%] lg:px-[12%] py-3 text-sm">
          <div className="flex w-1/2 gap-5 items-center">
            <div className="relative group">
              <span className="cursor-pointer flex items-center hover:text-yellow-600">
                English <span className="ml-1 text-xs">▼</span>
              </span>
              <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50">
                <li>Français</li>
                <li>Deutsch</li>
              </ul>
            </div>
            <div className="relative group">
              <span className="cursor-pointer flex items-center hover:text-yellow-600">
                USD <span className="ml-1 text-xs">▼</span>
              </span>
              <ul className="absolute top-full left-0 bg-white text-black shadow-md rounded-md p-4 transition hidden group-hover:flex flex-col gap-2 z-50">
                <li>USD</li>
                <li>EUR</li>
              </ul>
            </div>
            <p className="hide">Free Shipping On All Orders over $100</p>
          </div>
          <ul className="flex gap-5 w-1/2 justify-end items-center">
            <li className="text-yellow-400 flex items-center gap-1">
              <a href="#">
                {" "}
                <i className="bi bi-lightning-charge-fill"></i> Flash Sale
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition">
                <i className="bi bi-person-circle"></i> Account Login
              </a>
            </li>
            <li>
              <Link href="#" className="hover:text-yellow-400 transition">
                <i className="bi bi-globe-americas"></i> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Middle Nav */}
        <div className="middle-nav w-full flex flex-wrap justify-between items-center px-[5%] lg:px-[12%] py-4 lg:py-6 gap-y-4">
          <div className="w-1/2 lg:w-1/4">
            <Link to="/">
              <h2 className="text-4xl lg:text-5xl font-bricolage text-black font-bold">
                Easy<span className="text-yellow-500">Buy</span>
              </h2>
            </Link>
          </div>

          <div
            className="w-full lg:w-1/2 md: relative order-3 lg:order-2"
            ref={searchContainerRef}
          >
            <div className="product-search flex items-center h-14 border-4 border-yellow-500 rounded-md w-full overflow-hidden">
              <select
                name="category"
                className="bg-gray-100 font-semibold p-2 w-1/3 border-none outline-none"
              >
                <option>All Categories</option>
                <option>Camera</option>
                <option>Accessories</option>
                <option>Camera & Lenses</option>
                <option>Drones</option>
                <option>Security Cameras</option>
                <option>Games</option>
              </select>
              <input
                type="text"
                name="search"
                className="w-full px-3 py-2 outline-none font-medium bg-gray-100"
                placeholder="Search for products"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() =>
                  searchTerm && searchResults.length > 0 && setShowResults(true)
                }
              />
              <button className="bg-yellow-500 text-white px-5 font-bold uppercase h-full">
                Search
              </button>
            </div>
            {showResults && searchResults.length > 0 && (
              <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50 max-h-80 overflow-y-auto">
                {searchResults.map((product) => (
                  <li
                    key={product.Id}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-4 border-b last:border-b-0"
                    onClick={() => handleResultClick(product.Id)}
                  >
                    <img
                      src={product.ProductsImage.replace("../public", "")}
                      alt={product.Name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="text-sm font-medium">{product.Name}</span>
                  </li>
                ))}
              </ul>
            )}
            {showResults && searchTerm && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-b-md shadow-lg z-50 p-4 text-center text-gray-500">
                No products found.
              </div>
            )}
          </div>

          <div className="w-1/2 lg:w-1/4 flex gap-5 items-center justify-end order-2 lg:order-3">
            <div className="hidden md:flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-telephone"></i>
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">Need Help?</span>
                <span className="text-yellow-600 font-bold">+08 9229 8228</span>
              </div>
            </div>

            <Link to="/wishlist" className="flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-suit-heart"></i>
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">My</span>
                <span className="text-yellow-600 font-bold">Wishlist</span>
              </div>
            </Link>

            <Link to="/cart" className="flex gap-2 items-center">
              <span className="text-3xl text-gray-500">
                <i className="bi bi-cart2"></i>
              </span>
              <div className="flex flex-col text-sm">
                <span className="text-gray-500">My</span>
                <span className="text-yellow-600 font-bold">Cart</span>
              </div>
            </Link>
            <button className="lg:hidden text-3xl" onClick={toggleMenu}>
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full px-[8%] lg:px-[12%] py-3 border-t border-gray-200 hidden lg:flex items-center justify-between gap-6">
          <div className="relative w-1/5">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  <i className="bi bi-list"></i>
                </span>
                <span className="font-bold">All Categories</span>
              </div>
            </div>

            {open && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md overflow-hidden mt-2 w-full z-40 transition-all duration-300">
                {categories.map(([label, icon], i) => (
                  <a
                    href="/shop"
                    key={i}
                    className="flex items-center gap-3 px-4 py-2 border-b last:border-none hover:bg-gray-100"
                  >
                    <span className="text-2xl">{icon}</span>
                    <span className="font-semibold">{label}</span>
                  </a>
                ))}
              </ul>
            )}
          </div>

          <ul className="flex gap-10 w-auto nav-menu font-bold">
            <li>
              <Link to="/" className="hover:text-yellow-400 text-xl transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 text-xl transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-yellow-400 text-xl transition"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-yellow-400 text-xl transition"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="hover:text-yellow-400 text-xl transition"
              >
                Faq's
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 text-xl transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link to="/wishlist" className="flex gap-3 items-center">
            <span className="text-2xl text-gray-600">
              <i className="bi bi-suit-heart"></i>
            </span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">Today's Deal</span>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-sm uppercase relative">
                hot
              </span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bricolage text-black font-bold">
                Tron<span className="text-yellow-500">Mart</span>
              </h2>
              <button className="text-3xl" onClick={toggleMenu}>
                <i className="bi bi-x"></i>
              </button>
            </div>
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-6 nav-menu font-bold text-xl">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  Faq's
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={toggleMenu}
                  className="hover:text-yellow-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
