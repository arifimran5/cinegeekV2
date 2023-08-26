import Main from '@/components/id_page/Main'

async function getShow(id: string) {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API}`

  return (await fetch(url)).json()
}

async function TVPage({ params: { id } }: { params: { id: string } }) {
  const show = await getShow(id)
  return (
    <main>
      <Main data={show} />
    </main>
  )
}

export default TVPage
