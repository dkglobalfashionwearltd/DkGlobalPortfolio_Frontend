import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-100 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@company.com"
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <EnvelopeIcon className="h-4 w-4" />
            info@company.com
          </a>
          <a
            href="tel:+123456789"
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <PhoneIcon className="h-4 w-4" />
            +1 234 567 89
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
