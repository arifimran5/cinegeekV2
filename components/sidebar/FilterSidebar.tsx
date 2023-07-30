'use client'

import { FormEvent, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/Select'
import { cn } from '@/utils/helper'

type Genre = {
  id: number
  name: string
}

function FilterSidebar({ genres }: { genres: Array<Genre> }) {
  const pathname = usePathname()
  const router = useRouter()

  const [sortBy, setSortBy] = useState('popularity.desc')
  const [selectedGenres, setSelectedGenres] = useState<Array<number>>([])
  // const [releaseDate, setReleaseDate] = useState({ from: "", to: "" })

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    router.replace(
      `${pathname}?advance=true&sortBy=${sortBy}${
        selectedGenres.length > 0 ? '&genres=' + selectedGenres.join('%2C') : ''
      }`
    )
  }

  const handleGenreSelect = (id: number) => {
    let index = selectedGenres.findIndex((el) => el === id)
    if (index === -1) {
      setSelectedGenres((prev) => prev.concat(id))
    } else {
      setSelectedGenres(selectedGenres.filter((el) => el !== id))
    }
  }

  const genreIsSelected = (id: number) => {
    return selectedGenres.findIndex((el) => el === id) !== -1
  }

  return (
    <div className='sticky top-4 h-[90vh] border-2 border-gray-100 px-4 py-4 rounded-md w-72'>
      <h2 className='text-2xl capitalize'>{pathname.substring(1)}</h2>
      <form className='mt-4'>
        {/* Sort Select Menu */}
        <div className='flex items-center gap-4 pb-4 border-b-2 border-gray-100'>
          <span className='text-gray-400'>Sort By</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className='w-[180px] h-8'>
              <SelectValue placeholder='Popularity' />
            </SelectTrigger>
            <SelectContent className='shadow-md'>
              <SelectItem value='popularity.desc'>Popularity</SelectItem>
              <SelectItem value='vote_average.desc'>Rating</SelectItem>
              <SelectItem value='primary_release_date.desc'>
                Release Date
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Genres */}
        <span className='inline-block mt-3 text-gray-400'>Genres</span>
        <div className='flex flex-wrap items-center pb-4 mt-2 border-b-2 border-gray-100 gap-x-2 gap-y-1'>
          {genres.map((g) => (
            <button
              type='button'
              data-active={genreIsSelected(g.id)}
              onClick={() => handleGenreSelect(g.id)}
              className={cn(
                'px-3 h-8 cursor-pointer text-sm border-[1px] border-input rounded-md',
                'data-[active=true]:bg-accent data-[active=true]:font-medium'
              )}
              key={g.id}
            >
              {g.name}
            </button>
          ))}
        </div>

        {/* Release Date */}
        <span className='inline-block mt-3 text-gray-400'>Release Date</span>
        <div className='pb-4 mt-2 border-b-2 border-gray-100'></div>

        {/* Language */}
        <span className='inline-block mt-3 text-gray-400'>Language</span>
        <div className='pb-4 mt-2 border-b-2 border-gray-100'></div>

        {/* submit button */}
        <button
          onClick={handleSearch}
          type='submit'
          className='w-full p-2 mt-4 rounded-md bg-accent ring-[2px] ring-gray-200/30 shadow'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default FilterSidebar
