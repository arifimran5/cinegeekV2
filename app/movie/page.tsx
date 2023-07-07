import Container from "@/components/Container";
import ContentList from "@/components/ContentList";
import FilterSidebar from "@/components/FilterSidebar";
import { type Content } from "@/utils/types";

type FetchResult = {
  page: number;
  results: Content[];
  total_pages: number;
  total_results: number;
};

async function getMovies(searchParams: {
  category: string;
  page: string;
}): Promise<FetchResult> {
  const { category, page } = searchParams;
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${category ? category : "popular"}`
  );
  url.searchParams.append("page", page);
  url.searchParams.append("api_key", process.env.TMDB_API as string);
  return (await fetch(url)).json();
}

export default async function Movies({
  searchParams,
}: {
  searchParams: { category: string; page: string };
}) {
  const data = await getMovies(searchParams);

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
        <h1>Movies Page</h1>
        <div className="xl:gap-4 xl:grid xl:grid-cols-4">
          <div className="hidden xl:block xl:col-span-1">
            <FilterSidebar />
          </div>
          <div className="overflow-y-auto xl:col-span-3">
            <ContentList content={data.results} />
          </div>
        </div>
      </Container>
    </main>
  );
}
