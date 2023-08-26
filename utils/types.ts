export type Content = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  name?: string
  first_air_date?: string
  last_air_date?: string
  genres?: [{ id: number, name: string }]
  homepage?: string
  imdb_id?: string
  revenue?: number
  budget?: number
  runtime?: number
  tagline?: string
  number_of_episodes?: number
  number_of_seasons?: number
}