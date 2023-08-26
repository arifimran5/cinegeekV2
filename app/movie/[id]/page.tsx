import Main from '@/components/id_page/Main'

async function getMovie(id: string) {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API}`

  return (await fetch(url)).json()
}

async function MoviePage({ params: { id } }: { params: { id: string } }) {
  const movie = await getMovie(id)
  return (
    <>
      <Main data={movie} />
    </>
  )
}

export default MoviePage
