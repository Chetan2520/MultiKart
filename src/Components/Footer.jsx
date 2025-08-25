import { Facebook, Instagram, Twitter, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-white text-2xl">
      <div className=" px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src='https://themes.pixelstrap.com/multikart/assets/images/logo-white.png'></img>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Discover the latest trends and enjoy seamless shopping with our exclusive collections.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-lg">Multikart Demo Store, Demo Store India 345-659</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300 text-lg">Call Us: 123-456-7898</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300 text-lg">Email Us: Support@Multikart.Com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              {['Baby Essentials', 'Bag Emporium', 'Books', 'Christmas', 'Classic Furnishings', 'Crystal Clarity Optics'].map((item) => (
                <li key={item} >
                  <a href="#" className="text-gray-300 text-lg ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2">
              {['Home', 'Collections', 'About Us', 'Blogs', 'Offers', 'Search'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 text-lg ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">HELP CENTER</h3>
            <ul className="space-y-2">
              {['My Account', 'My Orders', 'Track Order', 'Wishlist', "Faq's", 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 text-lg ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">FOLLOW US</h3>
            <p className="text-gray-300 text-lg mb-4">
              Never Miss Anything From Store By Signing Up To Our Newsletter.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 px-3 py-2 text-lg text-gray-800 bg-white border-0 "
              />
              <button className="bg-orange-400 w-40 text-white px-1 py-2 text-lg font-medium ">
                Subscribe
              </button>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
               <Facebook/>
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Twitter/>
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Instagram/>
              </button>
              <button className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-300 text-lg">
              © 2024-25 themeforest powered by pixelstrap
            </div>
            <div className="flex items-center gap-4">
              
              <div className="">
                <span className="text-white text-xs font-bold">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/payment.png'></img>
                </span>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>

      

    
    </footer>
  )
}

export default Footer
