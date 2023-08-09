import Container from '@/components/Container'
import ContentList from '@/components/ContentList'
import FilterSidebar from '@/components/sidebar/FilterSidebar'
import { type Content } from '@/utils/types'

type FetchResult = {
  page: number
  results: Content[]
  total_pages: number
  total_results: number
}

type SearchParams = {
  category: string
  page: string
  advance?: string
  sortBy?: string
  genres?: string
  date?: string
}

async function getMovies(searchParams: SearchParams): Promise<FetchResult> {
  const { category, page, advance, sortBy, genres, date } = searchParams
  let url
  if (!advance) {
    url = new URL(`https://api.themoviedb.org/3/movie/${category ?? 'popular'}`)
  } else {
    url = new URL(`https://api.themoviedb.org/3/discover/movie`)
    sortBy && url.searchParams.append('sort_by', sortBy)
    genres && url.searchParams.append('with_genres', genres)

    // TODO
    // date && url.searchParams.append('sortBy', date)
  }
  if (page) {
    url.searchParams.append('page', page)
  }
  url.searchParams.append('api_key', process.env.TMDB_API as string)

  return (await fetch(url)).json()
}

async function getGenres() {
  let url = new URL(`https://api.themoviedb.org/3/genre/movie/list`)
  url.searchParams.append('api_key', process.env.TMDB_API as string)

  return (await fetch(url)).json()
}

export default async function Movies({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const data = await getMovies(searchParams)
  const genres = await getGenres()

  let { page } = searchParams

  if (!data.results) {
    return (
      <Container>
        <h1 className='text-2xl font-bold'>No data found</h1>
        <p>check for broken links</p>
      </Container>
    )
  }

  return (
    <main className='mt-4'>
      <Container>
        <div className='xl:gap-4 xl:grid xl:grid-cols-4'>
          <div className='hidden xl:block xl:col-span-1'>
            <FilterSidebar genres={genres.genres} />
          </div>
          <div className='overflow-y-auto xl:col-span-3'>
            <ContentList
              content={data.results}
              curr_page={page ? Number.parseInt(page) : 1}
            />
          </div>
        </div>
      </Container>
    </main>
  )
}
