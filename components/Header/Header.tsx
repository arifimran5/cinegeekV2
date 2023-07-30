import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'
import { ChevronDown, Menu, SearchIcon } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/DropDown'
import MobileHeader from './MobileMenu'

function Header() {
  return (
    <header className='sticky top-0 shadow-sm bg-white/95 backdrop-blur-sm md:static'>
      <Container>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex items-center gap-8'>
            <Link
              className='flex items-center text-2xl font-bold'
              href='/movie'
            >
              <span>cineg</span>
              <span className='inline-block px-[.5px] mt-2'>
                <Image
                  src='/logo-eye.png'
                  quality={100}
                  alt='Logo of cinegeek'
                  width={30}
                  height={25}
                />
              </span>
              <span>k</span>
            </Link>
            <div className='items-center hidden gap-4 md:flex'>
              <div className='flex items-center gap-1'>
                <p>Movies</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='min-w-[9rem]'>
                    <DropdownMenuItem className='text-base'>
                      Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      Now Playing
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      Upcoming
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      Top Rated
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className='flex items-center gap-1'>
                <p>TV Shows</p>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <ChevronDown size={20} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className='min-w-[9rem]'>
                    <DropdownMenuItem className='text-base'>
                      Popular
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      Airing Today
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      On TV
                    </DropdownMenuItem>
                    <DropdownMenuItem className='text-base'>
                      Top Rated
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className='items-center hidden px-2 py-1 rounded-md shadow md:flex ring-gray-300/10 ring-1'>
            <input
              type='text'
              placeholder='Search a Movie or TV'
              className='px-2 py-1 bg-transparent outline-none placeholder:text-gray-500 placeholder:text-sm'
            />
            <SearchIcon size={20} />
          </div>

          <MobileHeader>
            <div className='md:hidden'>
              <Menu />
            </div>
          </MobileHeader>
        </nav>
      </Container>
    </header>
  )
}

export default Header
