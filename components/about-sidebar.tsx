
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { ChevronDown } from 'lucide-react'

export default function AboutSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          About Us
          <ChevronDown className={`-mr-1 h-5 w-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Link 
              to="/team" 
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Meet the Team
            </Link>
            <Link 
              to="/cubs" 
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Meet the Cubs
            </Link>
            <Link 
              to="/our-values" 
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Our Values
            </Link>
            <Link 
              to="/fleet" 
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Our Fleet
            </Link>
            <Link 
              to="/bears-in-numbers" 
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              BEARS in Numbers
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
