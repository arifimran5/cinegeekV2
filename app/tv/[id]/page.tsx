import Container from "@/components/Container";

async function getShow(id: string) {
  const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.TMDB_API}`;

  return (await fetch(url)).json();
}

async function TVPage({ params: { id } }: { params: { id: string } }) {
  const show = await getShow(id);
  return (
    <Container>
      <h1>{show.name}</h1>
    </Container>
  );
}

export default TVPage;
