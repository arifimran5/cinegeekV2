import Container from "@/components/Container";
import ContentList from "@/components/ContentList";
import { type Content } from "@/utils/types";

type FetchResult = {
  page: number;
  results: Content[];
  total_pages: number;
  total_results: number;
};

async function getTVShows(category: string): Promise<FetchResult> {
  const url = `https://api.themoviedb.org/3/tv/${
    category ? category : "popular"
  }?api_key=${process.env.TMDB_API}`;

  return (await fetch(url)).json();
}

export default async function TVShows({
  searchParams: { category },
}: {
  searchParams: { category: string };
}) {
  const data = await getTVShows(category);

  if (!data.results) {
    return (
      <Container>
        <h1 className="text-2xl font-bold">No data found</h1>
        <p>check for broken links</p>
      </Container>
    );
  }

  return (
    <main className="">
      <Container>
        <h1>TV Shows Page</h1>
        <ContentList content={data.results} />
      </Container>
    </main>
  );
}
