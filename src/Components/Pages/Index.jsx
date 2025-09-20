import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import heroImg from "../../assets/hero.png";
import heroImg2 from "../../assets/hero-2.png";
import heroImg3 from "../../assets/hero-3.png";

import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";

import ProductData from "../../Data.json";

import bannerImg2 from "../../assets/banner.jpg";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";

import bannerCard1 from "../../assets/banner-card-3.jpg";

import { Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./useCart";

function Index() {
  const products = ProductData.Products;
  const specialOffer = products.find((p) => p.Id === 7);
  const { handleAddToCart } = useCart();

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const bestSellerSlides = chunk(products.slice(28, 36), 2);

  return (
    <>
      <div className="bg-element"></div>
      {/* HERO */}
      <div className="hero-bg">
        <header className="px-[8%] lg:px-[12%] py-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 3000,
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br />
                    STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    From <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>

                <div className="hero-image hide w-1/2">
                  <img src={heroImg} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br />
                    STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    From <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>

                <div className="hero-image hide w-1/2">
                  <img src={heroImg2} alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="hero flex gap-8">
                <div className="hero-content flex flex-col justify-start items-start w-1/2">
                  <h1 className="text-9xl font-bricolage">
                    THE NEW <br />
                    STANDARD
                  </h1>
                  <h5 className="font-bold text-xl">
                    UNDER FAVORABLE SMARTWATCHES
                  </h5>
                  <span className="hero-span text-3xl text-gray-800 font-semibold mt-3">
                    From <br />
                    <div className="text-6xl font-bold text-gray-800">
                      <sup>$</sup>
                      748
                      <sup>99</sup>
                    </div>
                  </span>
                  <button className="bg-yellow-400 px-[10%] py-3 rounded-md font-semibold mt-5 hover:bg-yellow-500 transition">
                    Start Buying
                  </button>
                </div>

                <div className="hero-image hide w-1/2">
                  <img src={heroImg3} alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </header>
      </div>
      {/* Banners */}
      <div className="px-[8%] lg:px-[12%] py-20">
        <div
          className="banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
          style={{ backgroundImage: `url(${banner5})` }}
        >
          <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
            EXCLUSIVE HEADPHONE
          </small>
          <h3 className="text-7xl font-semibold font-bricolage">
            Release Date & Price
          </h3>
          <p className="text-2xl">Today's Super Offer</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">
          {/* banner 1 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* banner 2 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* banner 3 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner3})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
          {/* banner 4 */}
          <div
            className="flex flex-col gap-2 bg-cover bg-center rounded-xl p-6 md:p-8 h-[350px] sm:h-[430px]"
            style={{ backgroundImage: `url(${banner4})` }}
          >
            <small className="bg-yellow-500 text-white text-xl px-4 py-2 w-fit rounded-md rounded-tl-none">
              New Product
            </small>
            <h3 className="text-xl md:text-2xl font-semibold font-bricolage">
              Release Date & Price
            </h3>
            <p className="text-base md:text-lg">Today's Super Offer</p>
          </div>
        </div>
      </div>
      {/* Section Title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Our Products
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Popular Products
        </h1>
      </div>
      {/* Products */}
      <div className="product-wrapper px-[8%] lg:px-[12%] py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* special offer card  */}
        <div className="bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
          <span className="text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
            Special Offer
          </span>
          <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
            Save <br />
            $120
          </div>
          <img
            src={specialOffer.ProductsImage.replace("../public", "")}
            alt={specialOffer.Name}
            className="w-4/5 mx-auto my-4"
          />
          <h3 className="text-yellow-800 font-semibold">{specialOffer.Name}</h3>
          <div className="mt-2">
            <span className="line-through text-gray-600">
              ${specialOffer.OldPrice}
            </span>{" "}
            <span className="text-red-600 text-xl font-bold">
              ${specialOffer.Price}
            </span>
          </div>
          <div className="flex justify-between w-full mt-4 text-sm">
            <span>Available: 6</span>
            <span>Already Sold: 27</span>
          </div>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
            <div className="bg-yellow-400 w-1/5 h-full"></div>
          </div>
          <p className="mt-3 text-gray-700 text-sm">Hurry Up! Offer Ends In:</p>
        </div>
        {/* products cards */}
        <div className="lg:col-span-3">
          <div className="grid product-wrap grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>
                <Link to={`/product/${product.Id}`} className="w-full">
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                  />
                  <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                    {product.Name}
                  </h4>
                </Link>
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
          <ToastContainer position="top-right" autoClose={1500} />
        </div>
      </div>
      {/* Section Title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Best Deals
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Our Best Deals
        </h1>
      </div>
      {/* Best Deals */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {products.slice(18, 22).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>
                <Link to={`/product/${product.Id}`} className="w-full">
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                  />
                  <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                    {product.Name}
                  </h4>
                </Link>
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
          <div className="grid grid-cols-1">
            <div className="bg-white border-2 border-yellow-400 p-6 product-banner-wrap rounded-xl flex flex-col items-center justify-center text-center relative">
              <span className="text-xl text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                Special Offer
              </span>
              <div className="absolute top-4 right-4 bg-yellow-400 text-white rounded-full h-16 w-16 flex items-center justify-center font-bold text-sm">
                Save <br />
                $120
              </div>
              <img
                src={specialOffer.ProductsImage.replace("../public", "")}
                alt={specialOffer.Name}
                className="w-4/5 mx-auto my-4"
              />
              <h3 className="text-yellow-800 font-semibold">
                {specialOffer.Name}
              </h3>
              <div className="mt-2">
                <span className="line-through text-gray-600">
                  ${specialOffer.OldPrice}
                </span>{" "}
                <span className="text-red-600 text-xl font-bold">
                  ${specialOffer.Price}
                </span>
              </div>
              <div className="flex justify-between w-full mt-4 text-sm">
                <span>Available: 6</span>
                <span>Already Sold: 27</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden">
                <div className="bg-yellow-400 w-1/5 h-full"></div>
              </div>
              <p className="mt-3 text-gray-700 text-sm">
                Hurry Up! Offer Ends In:
              </p>
              <div className="flex items-center justify-between gap-3 mt-3">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-semibold">3</span>
                  <span>Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-semibold">12</span>
                  <span>Hours</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-semibold">30</span>
                  <span>Minutes</span>
                </div>
                <button
                  onClick={() => handleAddToCart(specialOffer)}
                  className="bg-yellow-400 text-white ml-auto rounded-full w-[45px] h-[45px] hover:bg-red-500 hover:shadow-xl transition duration-300"
                >
                  <i className="bi bi-cart"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {products.slice(22, 26).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>
                <Link to={`/product/${product.Id}`} className="w-full">
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                  />
                  <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                    {product.Name}
                  </h4>
                </Link>
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
        </div>
      </div>
      {/* Section Title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Best Sellers
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Our Best Sellers
        </h1>
      </div>
      {/* Best Sellers */}
      <div className="px-[8%] lg:px-[12%] pb-20">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          breakpoints={{
            1399: { slidesPerView: 3 },
            1199: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          style={{ padding: "20px" }}
        >
          {bestSellerSlides.map((slideProducts, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="flex flex-col gap-3">
                {slideProducts.map((product) => (
                  <div
                    key={product.Id}
                    className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
                  >
                    <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                      {product.Category}
                    </p>
                    <Link to={`/product/${product.Id}`} className="w-full">
                      <img
                        src={product.ProductsImage.replace("../public", "")}
                        alt={product.Name}
                        className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300 mx-auto"
                      />
                      <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                        {product.Name}
                      </h4>
                    </Link>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* banner 2 */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div
          className="banner-1 flex flex-col justify-center gap-5 bg-cover bg-center rounded-xl md:p-8"
          style={{ backgroundImage: `url(${bannerImg2})` }}
        >
          <div className="flex items-center gap-4">
            <h3 className="text-4xl font-light font-bricolage">
              SHOP AND <span className="font-bold">SAVE BIG</span> ON HOTTEST
              TABLETS
            </h3>
            <small className="bg-yellow-400 text-white text-xl px-4 py-2 text-center w-fit rounded-md rounded-tl-none hide">
              <span className="font-thin text-xl text-black">STARTING AT</span>
              <div className="text-3xl font-bold p-2 px-5 text-gray-800">
                <sup>$</sup>
                748
                <sup>99</sup>
              </div>
            </small>
          </div>
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
      {/* Section Title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Top Products
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Our Top <span className="text-yellow-400">Products</span>
        </h1>
      </div>
      {/* Top Products */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* col 1 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Featured Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(12, 15).map((product) => (
                <div
                  key={product.Id}
                  className="bg-white shadow-md rounded-xl p-4 flex  items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
                >
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col ml-5 w-full">
                    <Link to={`/product/${product.Id}`}>
                      <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                        {product.Name}
                      </h4>
                    </Link>

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
          {/* col 2 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Onsale Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(18, 21).map((product) => (
                <div
                  key={product.Id}
                  className="bg-white shadow-md rounded-xl p-4 flex  items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
                >
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col ml-5 w-full">
                    <Link to={`/product/${product.Id}`}>
                      <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                        {product.Name}
                      </h4>
                    </Link>

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
          {/* col 3 */}
          <div>
            <h2 className="top-product text-xl font-bricolage font-semibold border-b border-yellow-200 pb-1">
              Top Rated Products
            </h2>
            <div className="flex flex-col gap-5 mt-9">
              {products.slice(9, 12).map((product) => (
                <div
                  key={product.Id}
                  className="bg-white shadow-md rounded-xl p-4 flex  items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
                >
                  <img
                    src={product.ProductsImage.replace("../public", "")}
                    alt={product.Name}
                    className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col ml-5 w-full">
                    <Link to={`/product/${product.Id}`}>
                      <h4 className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2">
                        {product.Name}
                      </h4>
                    </Link>

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
          <img src={bannerCard1} className="w-full object-contain" alt="" />
        </div>
      </div>
    </>
  );
}

export default Index;
