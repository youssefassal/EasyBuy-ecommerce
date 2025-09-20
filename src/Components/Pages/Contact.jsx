import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-500 font-semibold">Contact</span>
        </div>
      </div>

      <div className="w-full text-gray-900 bg-white pt-20 pb-16 px-[8%] lg:px-[12%]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 font-bricolage">
              Leave us a message
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mb-6"></div>
            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Got a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="Firstname"
                  placeholder="First Name *"
                  className="w-full border border-gray-300 rounded-xl shadow-sm px-5 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-500 sm:text-sm transition"
                />
                <input
                  type="text"
                  id="Lastname"
                  placeholder="Last Name *"
                  className="w-full border border-gray-300 rounded-xl shadow-sm px-5 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-500 sm:text-sm transition"
                />
              </div>

              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl shadow-sm px-5 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-500 sm:text-sm transition"
              />

              <textarea
                id="message"
                placeholder="Your Message *"
                rows="5"
                className="w-full border border-gray-300 rounded-xl shadow-sm px-5 py-3 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-500 sm:text-sm transition"
              ></textarea>

              <button
                type="submit"
                id="submit"
                className="bg-yellow-500 text-white py-3 px-6 rounded-md hover:bg-yellow-600 font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3></h3>
            {/* 4:40:00 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
