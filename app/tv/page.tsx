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

async function getTVShows(searchParams: {
  category: string
  page: string
}): Promise<FetchResult> {
  const { category, page } = searchParams
  const url = new URL(
    `https://api.themoviedb.org/3/tv/${category ? category : 'popular'}`
  )
  url.searchParams.append('page', page)
  url.searchParams.append('api_key', process.env.TMDB_API as string)
  return (await fetch(url)).json()
}

async function getGenres() {
  let url = new URL(`https://api.themoviedb.org/3/genre/tv/list`)
  url.searchParams.append('api_key', process.env.TMDB_API as string)

  return (await fetch(url)).json()
}

export default async function TVShows({
  searchParams,
}: {
  searchParams: { category: string; page: string }
}) {
  const data = await getTVShows(searchParams)
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
