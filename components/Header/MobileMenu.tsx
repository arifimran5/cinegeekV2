'use client'

import {
  CalendarDays,
  PartyPopper,
  Play,
  SearchIcon,
  TrendingUp,
  Tv,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useState, ReactNode } from 'react'
import ThemeSwitcher from './ThemeSwitcher'

function MobileHeader({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className='md:hidden'>
      <button onClick={() => setOpen(!open)}>
        {!open && children}
        {open && <X />}
      </button>
      {open && (
        <div className='fixed animate-in duration-200 fade-in slide-in-from-top top-[4rem] pb-4 left-0 w-full bg-background  backdrop-blur-sm'>
          <div className='px-4 mt-2'>
            <h3 className='font-medium'>Movies</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/movie?category=popular`}
                >
                  <PartyPopper size={19} />
                  <span>Popular</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/movie?category=now_playing`}
                >
                  <Play size={19} />
                  <span>Now Playing</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/movie?category=upcoming`}
                >
                  <CalendarDays size={19} />
                  <span>Upcoming</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/movie?category=top_rated`}
                >
                  <TrendingUp size={19} />
                  <span>Top Rated</span>
                </Link>
              </p>
            </div>
          </div>
          <div className='px-4 mt-4'>
            <h3 className='font-medium'>TV Shows</h3>
            <div className='pl-4'>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/tv?category=popular`}
                >
                  <PartyPopper size={19} />
                  <span>Popular</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/tv?category=airing_today`}
                >
                  <Play size={19} />
                  <span>Airing Today</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/tv?category=on_the_air`}
                >
                  <Tv size={19} />
                  <span>On TV</span>
                </Link>
              </p>
              <p className='py-2 border-b-[1px] transition-all duration-100 hover:pl-1  cursor-pointer'>
                <Link
                  onClick={handleClose}
                  className='flex items-center gap-3'
                  href={`/tv?category=top_rated`}
                >
                  <TrendingUp size={19} />
                  <span>Top Rated</span>
                </Link>
              </p>
            </div>
          </div>
          <div className='flex items-center justify-between px-4 mt-6'>
            <ThemeSwitcher />
            <Link
              onClick={handleClose}
              href='/search'
              className='flex items-center float-right gap-3 md:hidden'
            >
              {/* <input
                type='text'
                placeholder='Search a Movie or TV'
                className='w-full px-2 py-1 bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm'
              /> */}
              Go to search
              <SearchIcon size={22} />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileHeader
