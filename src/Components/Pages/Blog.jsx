import React from "react";

import blogImg1 from "../../assets/blog-1.jpg";
import blogImg2 from "../../assets/blog-2.jpg";
import blogImg3 from "../../assets/blog-3.jpg";
import blogImg4 from "../../assets/blog-4.jpg";
import blogImg5 from "../../assets/blog-5.jpg";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    img: blogImg1,
    title: "Robot Wars - Post With Gallery",
    meta: "Design, Tech - Mar 5, 2016",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    img: blogImg2,
    title: "Robot Wars - Closed - Audio Post ",
    meta: "Design, Audio - Mar 5, 2016",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 3,
    img: blogImg3,
    title: "Robot Wars - Closed - Video Post ",
    meta: "Tech, Video - Mar 4, 2016",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 4,
    img: blogImg4,
    title: "Announcement - Post Without Image ",
    meta: "News - Mar 5, 2016",
    excerpt:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 5,
    img: blogImg5,
    title: "SpaceX Falcon explodes after Landing",
    meta: "Technology, News - Mar 5, 2016",
    excerpt:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

function Blog() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="w-full bg-yellow-100 py-4 px-[8%] lg:px-[12%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-500 font-semibold">Blog</span>
        </div>
      </div>

      {/* blog section */}
      <div className="w-full text-gray-900 bg-gray-50 py-16 px-[8%] lg:px-[12%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Blog List */}
          <div className="lg:col-span-8 space-y-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="relative group flex flex-col gap-8 items-start border border-gray-200
                rounded-lg p-5 bg-white shadow-sm hover:shadow-lg transition duration-300"
              >
                <div className="overflow-hidden rounded-lg shadow-md w-full">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm flex items-center gap-2 mb-3">
                    <i className="ri-calendar-line"></i>
                    {post.meta}
                  </p>
                  <div className="w-16 h-[2px] bg-yellow-600 mb-3 group-hover:w-24 transition-all duration-300"></div>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 px-5 py-2 text-sm text-black font-bold bg-yellow-400 border border-yellow-400 rounded-full transition-all duration-300 hover:bg-transparent hover:text-black hover:border-yellow-400">
                    Read More <i className="ri-arrow-right-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* search */}
            <div className="border border-gray-200 rounded-lg p-2 bg-yellow-500 shadow-sm">
              <div className="flex items-center border border-gray-200 rounded overflow-hidden bg-white">
                <input
                  name="search"
                  type="text"
                  placeholder="Search..."
                  className="w-full outline-none px-3 py-2 text-sm"
                />
                <i className="ri-search-line text-gray-500 px-3"></i>
              </div>
            </div>

            {/* About */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <i className="ri-information-line text-yellow-500 text-xl"></i>{" "}
                About Blog
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>

            {/* Categories */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2 ">
                <i className="ri-bookmark-line text-yellow-500 text-xl"></i>{" "}
                Categories
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition">
                  <i className="ri-arrow-right-line"></i> Design
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition">
                  <i className="ri-arrow-right-line"></i> Technology
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition">
                  <i className="ri-arrow-right-line"></i> Audio
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-500 cursor-pointer transition">
                  <i className="ri-arrow-right-line"></i> Lifestyle
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="text-lg font-semibold mb-2 flex-items-center gap-2 text-gray-800">
                <i className="ri-time-line text-green-500 text-xl"></i> Recent
                Posts
              </h4>
              <ul className="space-y-4">
                {blogPosts.map((post) => (
                  <li
                    key={post.id}
                    className="flex items-start gap-4 group hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all duration-300"
                  >
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-md shadow-sm shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-800 group-hover:text-yellow-500 transition">
                        {post.title}
                      </span>
                      <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                        <i className="ri-calendar-line text-gray-400 text-sm"></i>
                        {post.meta}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <i className="ri-hashtag text-pink-500 text-xl"></i> Tags
              </h4>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "tech",
                  "modern",
                  "video",
                  "bootstrap",
                  "theme",
                  "creative",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 font-semibold px-2 py-1 border border-gray-200 rounded hover:bg-yellow-300  cursor-pointer transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default Blog;
