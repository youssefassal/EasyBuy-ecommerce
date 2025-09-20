import React, { useEffect, useState } from "react";

import ProductData from "../../Data.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "./useCart";

function ProductDetails() {
  const { id } = useParams();
  const products = ProductData.Products;
  const navigate = useNavigate();
  const product = products.find((p) => p.Id === parseInt(id));

  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isWishlisted, setIsWishlisted] = useState(false);

  const { handleAddToCart } = useCart();

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product?.Id);
    setIsWishlisted(exists);
  }, [product?.Id]);

  if (!product)
    return (
      <div className="p-10 text-center text-xl alert alert-danger">
        Product Not Found
      </div>
    );

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const handleAddToWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product.Id);

    if (!exists) {
      const updatedList = [...wishlist, { ...product, quantity: 1 }];
      localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    }

    toast.success("✅ Item added to wishlist");

    setTimeout(() => {
      navigate("/wishlist");
    }, 1000);
  };

  if (!product)
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Product Not Found
      </div>
    );

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      {/* Page Section */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="font-semibold text-red-900">Product Details</span>
        </div>
      </div>
      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-center gap-10 px-[8%] lg:px-[12%] py-20">
        <div className="w-full md:w-1/2 flex gap-6 justify-between px-[80px] py-[50px] border border-gray-300 rounded-xl shadow-md relative">
          {/* Main Image */}
          <div
            className="relative w-[250px] h-[250px] overflow-hidden rounded-xl shadow-md border border-gray-300 cursor-pointer"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.ProductsImage.replace("../public", "")}
              alt={product.Name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* zoomed img show */}
          {showZoom && (
            <div className="w-[250px] h-[250px]  overflow-hidden rounded-xl shadow-md md:block relative z-20">
              <img
                src={product.ProductsImage.replace("../public", "")}
                alt="zoom"
                className="absolute w-[500px] h-[500px] object-contain pointer-events-none"
                style={{
                  left: `-${mousePosition.x * 1.2}px`,
                  top: `-${mousePosition.y * 2.5}px`,
                }}
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold bg-red-500 inline-block px-3 py-1 text-white mb-4">
            {product.Category}
          </p>
          <h1 className="text-3xl font-bold font-bricolage text-black mb-3">
            {product.Name}
          </h1>

          <div className="text-2xl font-bold text-red-600 mb-2">
            ${product.Price}
            {product.OldPrice && (
              <span className="text-lg text-gray-600 ml-3 line-through">
                ${product.OldPrice}
              </span>
            )}
          </div>

          <p className="text-gray-600 mb-4">{product.Description}</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-6 py-2 rounded bg-red-500 text-white hover:bg-yellow-500 transition"
            >
              Add To Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="mt-4 px-6 py-2 rounded bg-yellow-500 text-white hover:bg-red-500 transition"
            >
              Add To Wishlist
            </button>
          </div>
          <div className="my-3 bg-red-100 p-3">
            <p className="text-semibold">
              - Estimated delivery time 14-30 days.
            </p>
            <p className="text-semibold">
              - 18 months warranty at Genuine Warranty Center
            </p>
            <p className="text-semibold">
              - Use coupon to get extra $23 off (only this product)
            </p>
          </div>
        </div>
      </div>
      {/* policys */}
      <div className="px-[8%] lg:px-[12%]">
        <h2 className="font-bricolage font-bold text-3xl mb-5">
          Shipping Policy
        </h2>
        <p className="mb-3 text-md">
          At our Company, we understand the importance of timely delivery. We
          offer a variety of shipping options to suit your needs, including
          standard, expedited, and express shipping. Our dedicated team works
          diligently to process and dispatch your orders promptly, aiming to
          deliver them to your doorstep within the estimated timeframe.
        </p>
        <p className="mb-3 text-md">
          We strive to provide fast and reliable shipping to our customers.
          Here's everything you need to know about our shipping process:
        </p>
        <p className="mb-1">Dispatch: Within 24 Hours</p>
        <p className="mb-1">
          Free shipping across all products on a minimum purchase of $895.
        </p>
        <p className="mb-1">International delivery time 5 to 7 business days</p>
        <p className="mb-1">Cash on delivery might be available</p>
        <p className="mb-1">Easy 30 days returns and exchanges</p>
        <p className="mb-1">
          Please note that delivery times are estimates and may vary depending
          on factors such as product availability, destination, and carrier
          delay.
        </p>

        <h2 className="font-bricolage font-bold text-3xl mb-5 mt-10">
          Return Policy
        </h2>
        <p className="mb-5 text-md">
          We want you to be completely satisfied with your purchase from our
          website. If for any reason you are not entirely happy with your order,
          we’re here to help. Certain exclusions and conditions may apply, so we
          encourage you to review our detailed return policy for more
          information. Rest assured, our goal is to ensure your complete
          satisfaction with every purchase you make from our website
        </p>
        <p className="mb-1">
          Returned items must be unused, undamaged, and in the same condition as
          received.
        </p>
        <p className="mb-1">
          Original tags, labels, and packaging must be intact and included with
          the returned item.
        </p>
        <p className="mb-1">
          Proof of purchase, such as your order confirmation or receipt, is
          required for all returns.
        </p>
      </div>
      {/* Add Review */}
      <div className="px-[8%] lg:px-[10%] py-[50px]">
        <div className="px-[2%] py-[20px] border rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-bricolage">
            Add a Review
          </h2>
          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block mb-1 text-sm font-semibold text-gray-700"
              >
                Your Name
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                type="text"
                id="name"
                autoComplete="off"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block mb-1 text-sm font-semibold text-gray-700"
              >
                Rating
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                defaultValue=""
                id="rating"
              >
                <option value="" disabled>
                  Select Rating
                </option>
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="review"
                className="block mb-1 text-sm font-semibold text-gray-700"
              >
                Your Review
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                rows="4"
                placeholder="Enter Your Review"
                id="review"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      {/* Brands */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand1}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand2}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand3}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand4}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand5}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand6}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand7}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition duration-300"
                alt="brand"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default ProductDetails;
