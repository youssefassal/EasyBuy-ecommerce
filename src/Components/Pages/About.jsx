import React from "react";
import { Link } from "react-router-dom";

import aboutImg1 from "../../assets/about--card-1.jpg";
import aboutImg2 from "../../assets/about--card-2.jpg";
import aboutImg3 from "../../assets/about--card-3.jpg";
import bgImage from "../../assets/blog-1.jpg";
import aboutImg from "../../assets/blog-4.jpg";

import member1 from "../../assets/team-1.jpg";
import member2 from "../../assets/team-2.jpg";
import member3 from "../../assets/team-3.jpg";
import member4 from "../../assets/team-4.jpg";
import member5 from "../../assets/team-5.jpg";

function About() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-500 font-semibold">About</span>
        </div>
      </div>

      {/* HERO */}
      <div
        className="relative flex items-center justify-center h-[60vh] sm:h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-filter backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white px-[8%] lg:px-[12%]">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-gray-300 mb-2">
            Who we are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 font-bricolage">
            About Us
          </h2>
          <div className="w-32 h-[2px] bg-yellow-600 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
            We are passionate about delivering creative digital experiences and
            building products with lasting value and beauty.
          </p>
        </div>
      </div>

      {/* Vision title */}
      <div className="section-title px-[8%] lg:px-[12%] my-10">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Vision
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">Our Vision</h1>
      </div>

      {/* Vision cards */}
      <div className="px-[8%] lg:px-[12%] mt-16 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              img: aboutImg1,
              title: "What we really do?",
              text: "We create meaningful digital experiences that empower people, brands and businesses to grow with confidence.",
            },
            {
              img: aboutImg2,
              title: "Our Vision",
              text: "We strive to innovate and inspire through refined digital solutions - shaping a smarter, more connected world for tomorrow.",
            },
            {
              img: aboutImg3,
              title: "History of beginning",
              text: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 p-5 text-left hover:bg-white"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-yellow-500 font-bricolage mt-8">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {card.text}
                </p>
                <div className="mt-4 w-0 group-hover:w-full h-[2px] bg-yellow-500 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team title */}
      <div className="section-title px-[8%] lg:px-[12%]">
        <span className="text-xl font-semibold bg-yellow-300 px-5 py-2 rounded-full">
          Team
        </span>
        <h1 className="text-5xl font-bold font-bricolage mt-5">
          Meet Our Team
        </h1>
      </div>

      {/* Team cards */}
      <div className="bg-gray-50 py-32 px-[8%] lg:px-[12%]">
        <div className="flex flex-wrap justify-center gap-10 items-start text-center">
          {[
            {
              img: member1,
              name: "Thomas Snow",
              role: "CEO/Founder",
            },
            {
              img: member2,
              name: "Anna Baranov",
              role: "Client Care",
            },
            {
              img: member3,
              name: "Andre Kowalsy",
              role: "Support Boss",
            },
            {
              img: member4,
              name: "Pamela Doe",
              role: "Delivery Driver",
            },
            {
              img: member5,
              name: "Susan McCain",
              role: "Packaging Girl",
            },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-60 h-60 rounded-full border border-gray-300 shadow-md overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h4 className="text-lg font-semibold mt-4 text-yellow-500 font-bricolage">
                {member.name}
              </h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance section */}
      <div className="bg-white py-20 px-[8%] lg:px-[12%]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-4 bg-yellow-500 rounded-sm"></div>
              <h2 className="text-yellow-500 uppercase tracking-[0.2em] text-sm font-semibold">
                Our Performance
              </h2>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6 font-bricolage">
              We Believe In Quality Products
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              cupiditate impedit, nobis porro laborum natus obcaecati iure,
              accusantium eveniet reprehenderit suscipit deserunt doloremque
              dicta nemo molestiae minus error deleniti cumque!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImg}
                alt="Performance"
                className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
