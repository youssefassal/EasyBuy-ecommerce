import React, { useState } from "react";
import { Link } from "react-router-dom";

// FAQ data
const faqData = [
  {
    question: "What Shipping Methods Are Available?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "How Long Will It Take To Receive My Order?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "How Do I Track My Order?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "Do I Need an Account To Place An Order?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "How Do I Place An Order?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    question: "How Should I Contact if I Have Questions?",
    answer:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-500 font-semibold">FAQ</span>
        </div>
      </div>

      {/* Shipping Information section */}
      <section className="w-full text-gray-800 bg-white py-16 px-[8%] lg:px-[12%]">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-2 mt-3 font-bricolage">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-gray-500">
            This Agreement was last modified on 18th February 2025
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold mb-10 relative inline-block after:content-[''] after:block after:w-24 after:h-[3px] after:bg-yellow-600 after:mt-1">
            Shipping Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {faqData.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="space-y-2"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full text-gray-900 bg-white py-16 px-[8%] lg:px-[12%]">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-800 mb-2 mt-3 font-bricolage">
            FAQ Second Version
          </h1>
          <p className="text-sm text-gray-500">
            This Agreement was last modified on 18th February 2025
          </p>
        </div>

        <div className="mx-auto space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                onClick={() => toggleFAQ(index)}
                key={index}
                className={`border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  isOpen ? "bg-yellow-50" : "bg-white"
                }`}
              >
                <button className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group transition duration-300">
                  <h4
                    className={`text-lg font-medium transition-colors duration-300 ${
                      isOpen ? "text-yellow-600" : "text-gray-800"
                    } group-hover:text-yellow-600`}
                  >
                    {item.question}
                  </h4>
                  <i
                    className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-yellow-600" : "text-gray-400"
                    } group-hover:rotate-180`}
                  ></i>
                </button>

                <div
                  className={`px-6 bg-white overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 py-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;
