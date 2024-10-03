import React from "react";
import logo from "../../../assets/logo-no-background.png";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <div className="w-16 h-16 overflow-hidden">
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h4 className="text-xl font-semibold text-white mb-4">Jobify</h4>
            <p className="text-gray-400">
              Connecting top talent with leading companies. Empower your career
              and streamline your hiring process with Jobify.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookSquare className="text-[#1EBBD7]" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <IoLogoTwitter className="text-[#1EBBD7]" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <IoLogoLinkedin className="text-[#1EBBD7]" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">© 2024 Jobify. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
