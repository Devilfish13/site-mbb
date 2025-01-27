"use client"; // Ensure this is a client component

import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Mobile Hamburger Menu */}
      <button
        className="p-4 text-gray-800 lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close Menu" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-natural-500 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0`}
      >
        <Link href="/" className="p-4 text-lg font-bold">Mici bere si manele</Link>
        <ul className="space-y-4 p-4">
          <li>
            <Link href="despreGuilda" className="hover:text-primary-500">
              Despre Guilda
            </Link>
          </li>
          <li>
            <Link href="gallery" className="hover:text-gray-300">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;