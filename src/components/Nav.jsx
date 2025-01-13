import { Search, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";



export default function Navbar() {
  return (
    <nav className="">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6 text-pink-600"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
          <span className="text-xl font-bold">BlackHut</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/" className="font-medium hover:text-pink-600">Home</a>
          <a href="/menu" className="font-medium hover:text-pink-600">Menu</a>
          <a href="/offers" className="font-medium hover:text-pink-600">Offers</a>
        </div>

        {/* Search Bar */}
        <div className=" items-end max-w-md hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
            id='searchBar'
              type="search"
              placeholder="Search"
              className=" bg-gray-50 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <span id='cross' className='absolute top-[10px] right-2 text-pink-600 hidden'>
           < IoIosCloseCircleOutline />
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <button className="hidden md:flex items-center gap-2 border px-2 py-2 rounded-full">
            <img
              src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg"
              alt="English"
              className="w-5 h-4 object-cover"
            />
            <span className="text-sm font-medium">English</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>

          {/* Price */}
          <div className="hidden md:flex items-center gap-1 bg-gray-900 rounded-full px-5 py-2 text-white">
            <span className="text-sm font-medium">₱20.00</span>
          </div>

          {/* Login Button */}
          <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full">
         < FaRegCircleUser />
            Log In
          </Button>
        </div>
      </div>
    </nav>
  )
}

