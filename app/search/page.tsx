import Container from '@/components/Container'

export default function SearchPage() {
  return (
    <main className='mt-4'>
      <Container>
        <div className='xl:gap-4 xl:grid xl:grid-cols-4'>
          <div className='hidden xl:block xl:col-span-1'>
            {/* <FilterSidebar genres={genres.genres} /> */}
            sidebar
          </div>
          <div className='overflow-y-auto xl:col-span-3'>
            {/* <ContentList
              content={data.results}
              curr_page={page ? Number.parseInt(page) : 1}
            /> */}
            content list
          </div>
        </div>
      </Container>
    </main>
  )
}
