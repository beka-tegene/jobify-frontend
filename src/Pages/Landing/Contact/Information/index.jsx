import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export const Information = () => {
  return (
    <div className="px-[10%] py-10 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Get in Tech Section */}
        <div className="px-8 py-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Tech</h2>
          <p className="text-gray-600 text-xs mb-3">
            Join the tech industry and explore amazing career opportunities.
            Whether you're a seasoned professional or just getting started, we
            have the tools and resources to guide you.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#1ebbd7]" />
              <span className="text-gray-600">info@jobify.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#1ebbd7]" />
              <span className="text-gray-600">+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#1ebbd7]" />
              <span className="text-gray-600">
                123 Tech Street, San Francisco, CA
              </span>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="bg-gray-100 px-8 py-4 rounded-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#1ebbd7] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#41adc0] focus:outline-none focus:ring focus:ring-indigo-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
