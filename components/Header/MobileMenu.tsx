'use client'

import { SearchIcon, X } from 'lucide-react'
import { useState, ReactNode } from 'react'

function MobileHeader({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className='md:hidden'>
      <button onClick={() => setOpen(!open)}>
        {!open && children}
        {open && <X />}
      </button>
      {open && (
        <div className='fixed animate-in duration-200 fade-in slide-in-from-top top-[4rem] pb-4 left-0 w-full bg-white/95  backdrop-blur-sm'>
          <div className='px-4 mt-2'>
            <h3 className='font-medium'>Movies</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Popular
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Now Playing
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Upcoming
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Top Rated
              </p>
            </div>
          </div>
          <div className='px-4 mt-4'>
            <h3 className='font-medium'>TV Shows</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Popular
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Now Playing
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Upcoming
              </p>
              <p className='py-2 border-b-[1px] hover:bg-white/50 transition-all duration-100 hover:pl-1 border-gray-300/80 cursor-pointer'>
                Top Rated
              </p>
            </div>
          </div>
          <div className='px-4 mt-6'>
            <div className='flex items-center px-2 py-1 my-4 rounded-md shadow bg-accent md:hidden ring-gray-300/10 ring-1'>
              <input
                type='text'
                placeholder='Search a Movie or TV'
                className='w-full px-2 py-1 bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm'
              />
              <SearchIcon size={20} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
