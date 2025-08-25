import React from 'react'
import { BadgePercent, ChevronUp, Heart } from "lucide-react";
import { MdOutlineStarPurple500, MdStarPurple500 } from "react-icons/md";
const MainSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-20 text-xl">
      <div className="w-full px-20 px-4 py-8">
        <div className="flex gap-8">
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-8 bg-white rounded-lg shadow-sm p-6 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Categories</h3>
                  <button className="text-gray-800 ">
                    <ChevronUp/>
                  </button>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                  {['Fashion', 'Furniture', 'Book', 'Vegetable', 'Bag'].map((category) => (
                    <label key={category} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-600">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Brand</h3>
                  <button className="text-gray-800 ">
                    <ChevronUp/>
                  </button>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                  {['Couture Edge', 'Glamour Gaze', 'Urban Chic', 'VogueVista', 'Velocity Vibe','Nourish Naturally'].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Colours</h3>
                  <button className="text-gray-800 ">
                    <ChevronUp/>
                  </button>
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                  {['Blue', 'Green', 'Red', 'Beige', 'Black','Brown'].map((color) => (
                    <label key={color} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <span className="text-sm text-gray-600">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Rating</h3>
                  <button className="text-gray-800 ">
                    <ChevronUp/>
                  </button>
                </div>
                <div className="space-y-2">
                 
                    <label  className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <div className="flex items-center gap-1">
                        
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                       
                        <span className="text-sm text-gray-600 ml-1">5 Star</span>
                      </div>
                    </label>

                    <label  className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <div className="flex items-center gap-1">
                        
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                       
                        <span className="text-sm text-gray-600 ml-1">4 Star</span>
                      </div>
                    </label>

                    <label  className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <div className="flex items-center gap-1">
                        
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                       
                        <span className="text-sm text-gray-600 ml-1">3 Star</span>
                      </div>
                    </label>

                    <label  className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <div className="flex items-center gap-1">
                        
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                       
                        <span className="text-sm text-gray-600 ml-1">2 Star</span>
                      </div>
                    </label>

                    <label  className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                      <div className="flex items-center gap-1">
                        
                          <MdOutlineStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500 color='orange'/>
                          <MdStarPurple500  color='orange'/>
                       
                        <span className="text-sm text-gray-600 ml-1">1 Star</span>
                      </div>
                    </label>
                
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800">Price</h3>
                  <button className="text-gray-800 ">
                    <ChevronUp/>
                  </button>
                </div>
                <div className="px-2">
                  <div className="relative">
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-400 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>$0</span>
                      <span>$1,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>

          <div className="flex-1 ">
            <div className="bg-white border rounded-sm shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 ">
                  <select className="border border-gray-300  px-5  py-2 text-md text-[#777777]">
                    <option>Ascending Order</option>
                    <option>Descending Order</option>
                  </select>
                  <select className="border border-gray-300  px-3 py-2 text-md text-[#777777]">
                    <option>10 Products</option>
                    <option>20 Products</option>
                    <option>50 Products</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 border  p-3 hover:text-gray-600">
                      <img 
                        src="https://themes.pixelstrap.com/multikart/assets/images/inner-page/icon/2.png" 
                        alt="Layout Panel Left" 
                        className="w-5 h-5"
                      />
                    </button>
                    <button className="p-2 text-gray-400 p-3 border hover:text-gray-600">
                      <img 
                        src="https://themes.pixelstrap.com/multikart/assets/images/inner-page/icon/3.png" 
                        alt="Layout Panel Left" 
                        className="w-5 h-5"
                      />
                    </button>
                    <button className="p-2 text-gray-400 p-3 border hover:text-gray-600">
                      <img 
                        src="https://themes.pixelstrap.com/multikart/assets/images/inner-page/icon/4.png" 
                        alt="Layout Panel Left" 
                        className="w-5 h-5"
                      />
                    </button>
                    <button className="p-2 text-gray-400 p-3 border hover:text-gray-600">
                      <img 
                        src="https://themes.pixelstrap.com/multikart/assets/images/inner-page/icon/list.png" 
                        alt="Layout Panel Left" 
                        className="w-5 h-5"
                      />
                    </button>
                  
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/5.jpg' className="w-full h-full object-cover"></img>
                  </div>
                  <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Couture Edge</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Purple Mini Dress</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.40</span>
                    <span className="text-lg  line-through text-gray-400">$5.00</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/6.jpg' className="w-full h-full object-cover"></img>
                  </div>
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-orange-400">
                      <path d="M12 21s-6.716-4.35-9.193-8.21C.051 9.705 1.27 6.2 4.374 5.267 6.17 4.725 7.98 5.32 9.12 6.6L12 9.8l2.88-3.2c1.14-1.281 2.95-1.875 4.746-1.333 3.104.934 4.323 4.438 1.567 7.523C18.716 16.65 12 21 12 21z"/>
                    </svg>
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Chic Mini Dress</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.40</span>
                    <span className="text-lg  line-through text-gray-400">$5.00</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/7.jpg' className="w-full h-full object-cover"></img>
                  </div>
                  <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Urban Chic</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Striped Bodycon Dress</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$2.10</span>
                    <span className="text-lg  line-through text-gray-400">$3.00</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/8.jpg' className="w-full h-full object-cover"></img>
                  </div>
                  <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Beige Dress</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.20</span>
                    <span className="text-lg  line-through text-gray-400">$4.00</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/9.jpg' className="w-full h-full object-cover"></img>
                  </div>
                  <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Urban Chic</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Mauve Top</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$2.80</span>
                    <span className="text-lg  line-through text-gray-400">$3.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/10.jpg' className="w-full h-full object-cover"></img>
                  </div>
                   <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Red Bodysuit</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.60</span>
                    <span className="text-lg  line-through text-gray-400">$4.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/11.jpg' className="w-full h-full object-cover"></img>
                  </div>
                   <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Red Bodysuit</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.60</span>
                    <span className="text-lg  line-through text-gray-400">$4.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/12.jpg' className="w-full h-full object-cover"></img>
                  </div>
                   <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Red Bodysuit</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.60</span>
                    <span className="text-lg  line-through text-gray-400">$4.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/13.jpg' className="w-full h-full object-cover"></img>
                  </div>
                   <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Red Bodysuit</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.60</span>
                    <span className="text-lg  line-through text-gray-400">$4.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center relative">
                    <img src='https://themes.pixelstrap.com/multikart/assets/images/fashion-1/product/14.jpg' className="w-full h-full object-cover"></img>
                  </div>
                   <button className="absolute top-3 p-1 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Heart color='orange' />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-sm font-medium text-gray-800 flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>4.5</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className='flex items-center justify-between'>
                  <p className="text-2xl text-gray-800 mb-1 font-medium">Glamour Gaze</p>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-4 h-4 rounded-full bg-amber-200 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-amber-700 border border-gray-200"></div>
                    <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-200"></div>
                    <span className="text-xs text-gray-500 ml-1">+2</span>
                  </div>
                  </div>
                  <h3 className=" text-gray-500 mb-2 text-base">Red Bodysuit</h3>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl  text-gray-800">$3.60</span>
                    <span className="text-lg  line-through text-gray-400">$4.50</span>
                    <span className="text-lg  text-orange-500">5% Off</span>
                  </div>
                  <p className="text-lg text-gray-600 flex items-center gap-1">
                    <span className=" text-sm text-orange-500"><BadgePercent/></span>
                    Limited Time Offer: 5% off
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 border border-gray-300  flex items-center justify-center text-gray-600 hover:border-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-orange-500 text-white  flex items-center justify-center font-medium">1</button>
            <button className="w-10 h-10 border border-gray-300  flex items-center justify-center text-gray-600 hover:border-gray-400">2</button>
            <button className="w-10 h-10 border border-gray-300  flex items-center justify-center text-gray-600 hover:border-gray-400">3</button>
            <button className="w-10 h-10 border border-gray-300  flex items-center justify-center text-gray-600 hover:border-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
