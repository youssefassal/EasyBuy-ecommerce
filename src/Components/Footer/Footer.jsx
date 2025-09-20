import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-700 text-sm px-[8%] lg:px-[12%] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          <div className="flex items-center gap-4">
            <i className="bi bi-truck text-5xl text-yellow-500"></i>
            <p className="text-xl">
              <strong>Free Delivery</strong> <br />
              Free shipping on all orders
            </p>
          </div>

          <div className="flex items-center gap-4">
            <i className="bi bi-cash-coin text-5xl text-yellow-500"></i>
            <p className="text-xl">
              <strong>Returns</strong> <br />
              Back guarantee under 7 days
            </p>
          </div>

          <div className="flex items-center gap-4">
            <i className="bi bi-headset text-5xl text-yellow-500"></i>
            <p className="text-xl">
              <strong>Support 24/7</strong> <br />
              Support online 24 hours a day
            </p>
          </div>

          <div className="flex items-center gap-4">
            <i className="bi bi-shield-lock text-5xl text-yellow-500"></i>
            <p className="text-xl">
              <strong>Payments</strong> <br />
              100% payment security
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10 border-t border-yellow-500">
          <div className="space-y-2">
            <a href="#">
              <h2 className="text-5xl font-bricolage text-black font-bold">
                Easy<span className="text-yellow-500">Buy</span>
              </h2>
            </a>
            <p className="text-lg mt-2">Find a location nearest you.</p>
            <p className="text-lg">
              See{" "}
              <a href="#" className="text-red-600 underline font-semibold">
                Our Stores
              </a>
            </p>
            <p className="text-lg mb-5">Support1234@gmail.com</p>
            <div className="flex gap-3 text-xl text-gray-600">
              <i className="bi bi-instagram hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center"></i>
              <i className="bi bi-facebook hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center"></i>
              <i className="bi bi-twitter-x hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center"></i>
              <i className="bi bi-pinterest hover:text-white hover:bg-red-500 cursor-pointer transition w-10 h-10 rounded-full flex items-center justify-center"></i>
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-semibold mb-2">About Us</h3>
            {[
              "About Us",
              "News & Blog",
              "Brands",
              "Press Center",
              "Advertising",
              "Investors",
            ].map((link, i) => (
              <p key={i}>
                <a
                  href="#"
                  className="text-lg hover:text-yellow-500 transition"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-semibold mb-2">Support</h3>
            {[
              "Support Center",
              "Manage",
              "Service",
              "Haul Away",
              "Security Center",
              "Contact",
            ].map((link, i) => (
              <p key={i}>
                <a
                  href="#"
                  className="text-lg hover:text-yellow-500 transition"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
          <div className="space-y-1">
            <h3 className="text-3xl font-semibold mb-2">Order</h3>
            {[
              "Check Order",
              "Delivery & Pickup",
              "Returns",
              "Exchanges",
              "Developers",
              "Gift Cards",
            ].map((link, i) => (
              <p key={i}>
                <a
                  href="#"
                  className="text-lg hover:text-yellow-500 transition"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>

        <p className="text-center text-xl text-gray-600 border-t border-yellow-500 py-3">
          &copy; 2025. All rights reserved. By{" "}
          <a href="#" className="text-yellow-500 underline font-semibold">
            Assal
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
