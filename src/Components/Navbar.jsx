
import React from 'react'
import { Heart, User, Search, ShoppingCart, Menu, SlidersHorizontal, MoreHorizontal, Phone, ChevronUp } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="bg-[#333] text-white px-6 py-3">
        <div className="px-20 flex items-center justify-between text-zinc-300">
          <div className="flex items-center gap-6 text-md">
            <span>Welcome to Our store Multikart</span>
            <span className="mx-2 text-orange-500"> <FaPhoneAlt /> </span>
            <span>Call Us: 123 - 456 - 7890</span>
          </div>
          <div className="flex items-center gap-4 text-md">
            <Heart className="h-4 w-4 text-white/80" />
            <User className="h-4 w-4 text-white/80" />
            <span>My Account</span>
          </div>
        </div>
      </div>

      <div className="bg-white font-semibold">
        <div className=" px-24 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <RiMenu2Fill className="h-6 w-6 text-gray-700" />
              <img src="https://themes.pixelstrap.com/multikart/assets/images/logo.png" alt="Multikart" className="h-8" />
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              <a href="#" className="text-gray-800">Home</a>
              <div className="relative">
                <a href="#" className="text-gray-800 flex items-center gap-1">Feature
                <ChevronUp/>
                </a>
                <span className="absolute -top-4 left-9 bg-orange-500 text-white text-[10px] px-2 py-[2px] rounded">NEW</span>
              </div>
              <a href="#" className="text-gray-800 flex items-center gap-1">Shop
              <ChevronUp/></a>
              <a href="#" className="text-gray-800 flex items-center gap-1">Product
              <ChevronUp/></a>
              <a href="#" className="text-gray-800 flex items-center gap-1">Pages
              <ChevronUp/></a>
              <a href="#" className="text-gray-800 flex items-center gap-1">Blog
              <ChevronUp/></a>
            </nav>

            <div className="flex items-center gap-6">
              <Search className="h-5 w-5 text-gray-700" />
              <SlidersHorizontal className="h-5 w-5 text-gray-700" />
              <div className="relative">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
