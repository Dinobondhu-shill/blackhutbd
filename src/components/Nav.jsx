import { BlackContext } from "@/Context/Context";
import MyCart from "@/Pages/Cart/MyCart";
import { Search, ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { FaChevronDown } from "react-icons/fa";
import Profile from "./Profile";

export default function Navbar() {
  const { user } = useContext(BlackContext);
  const [showProfile, setShowProfile] =  useState(false)

  return (
    <nav className=" fixed w-full  z-50 shadow-sm shadow-gray-50 px-5 md:px-10 lg:px-28 bg-white">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
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
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-pink-600 font-medium" : "text-black font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/menu"}
            className={({ isActive }) =>
              isActive ? "text-pink-600 font-medium" : "text-black font-medium"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to={"/offers"}
            className={({ isActive }) =>
              isActive ? "text-pink-600 font-medium" : "text-black font-medium"
            }
          >
            Offers
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className=" items-end max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                id="searchBar"
                type="search"
                placeholder="Search"
                className=" bg-gray-200 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <span
                id="cross"
                className="absolute top-[10px] right-2 text-pink-600 hidden"
              >
                <IoIosCloseCircleOutline />
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-full">
              <img
                src="https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg"
                alt="English"
                className="w-5 h-4 object-cover"
              />
              <span className="text-sm font-medium">English</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>

            <MyCart />
            {
              showProfile && <Profile data={user} />
            }
            

            {user ? (
              <Button onClick={()=>setShowProfile(!showProfile)} className=" cursor-pointer flex items-center gap-2 px-5 py-2 bg-pink-600 hover:bg-pink-700  text-white rounded-full">
                <FaRegCircleUser />
                Account <FaChevronDown />
              </Button>
            ) : (
              <Link
                to={"/login"}
                className=" flex items-center gap-2 px-5 py-2 bg-pink-600 hover:bg-pink-700  text-white rounded-full"
              >
                <FaRegCircleUser />
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
