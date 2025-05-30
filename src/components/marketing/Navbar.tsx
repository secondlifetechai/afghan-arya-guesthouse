'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-gray-300 px-4 md:px-10 fixed z-50 w-full top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
        {/* logo section */}
        <div className="flex items-center">
          <img src={'/assets/logos/logo.png'} alt="" className="w-32" />
        </div>

        {/* menu section */}
        <nav className="md:flex hidden items-center gap-7">
          <ul className="flex gap-7 items-center text-xl font-semibold text-white">
            <Link href="/">
              <li className="cursor-pointer">Home</li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer">Brands</li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer">About</li>
            </Link>
            <Link href="#">
              <li className="cursor-pointer">Testimonial</li>
            </Link>
          </ul>
          <Link href="#contact">
            <button className="bg-gray-600 text-white hover:bg-amber-900 px-3 py-1 rounded-md">
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
