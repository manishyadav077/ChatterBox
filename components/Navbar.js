"use client";
import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser()

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">MyBrand</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/forums" className="text-white hover:text-gray-300">
            Forums
          </Link>
          <Link href="/services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/chat" className="text-white hover:text-gray-300">
            UserChat
          </Link>
          <UserButton />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="space-y-4 p-4">
            <Link href="/" className="block text-white hover:text-gray-300">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-gray-300"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-gray-300"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-gray-300"
            >
              Contact
            </Link>

            <UserButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
