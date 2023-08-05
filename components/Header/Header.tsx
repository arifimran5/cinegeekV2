import Image from 'next/image'
import Container from '../Container'
import Link from 'next/link'
import {
  CalendarDays,
  ChevronDown,
  Menu,
  PartyPopper,
  Play,
  SearchIcon,
  TrendingUp,
  Tv,
} from 'lucide-react'
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
                  <DropdownMenuContent className='min-w-[10rem]'>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <PartyPopper size={19} />
                      <span>Popular</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <Play size={19} />
                      <span>Now Playing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <CalendarDays size={19} />
                      <span>Upcoming</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <TrendingUp size={19} />
                      <span>Top Rated</span>
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
                  <DropdownMenuContent className='min-w-[10rem]'>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <PartyPopper size={19} />
                      <span>Popular</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <Play size={19} />
                      <span>Airing Today</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <Tv size={19} />
                      <span>On TV</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className='gap-3 text-base'>
                      <TrendingUp size={19} />
                      <span>Top Rated</span>
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
