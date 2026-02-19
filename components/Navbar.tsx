"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Ajit Dental Clinic
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dentist-in-jaipur">Dentist</Link>
          <Link href="/dental-implant-jaipur">Implants</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="tel:09602312374"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-800"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-6 space-y-4 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/dentist-in-jaipur">Dentist</Link>
          <Link href="/dental-implant-jaipur">Implants</Link>
          <Link href="/contact">Contact</Link>

          <a
            href="tel:09602312374"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
